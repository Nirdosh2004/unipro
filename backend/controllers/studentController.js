import mongoose from 'mongoose';  // Add this import at the top


// function to add student
import studentsModel from "../models/studentModel.js";

const addStudent = async (req, res) => {
  try {
    // Check if request body exists
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body is empty"
      });
    }

    // Destructure with default values
    const {
      name = '',
      enrollmentNo = '',
      email = '',
      about = '',
      technicalSkills = [],
      projects = [],
      githubLink = '',
      linkedinLink = ''
    } = req.body;

    // Validate required fields
    const requiredFields = ['name', 'enrollmentNo', 'email', 'about', 'technicalSkills', 'projects', 'githubLink'];
    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`,
        missingFields
      });
    }

    // Validate technicalSkills array
    if (technicalSkills.length === 0 || technicalSkills.length > 15) {
      return res.status(400).json({
        success: false,
        message: 'Please provide between 1-15 technical skills'
      });
    }

    // Validate projects array
    if (projects.length === 0 || projects.length > 4) {
      return res.status(400).json({
        success: false,
        message: 'Please provide between 1-4 projects'
      });
    }

    // Validate each project
    for (const project of projects) {
      if (!project.title || !project.bio || !project.technologies || project.technologies.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Each project must have title, bio, and at least one technology'
        });
      }
    }

    // Check for duplicate enrollmentNo or email
    const existingStudent = await studentsModel.findOne({
      $or: [
        { enrollmentNo },
        { email }
      ]
    });

    if (existingStudent) {
      return res.status(409).json({
        success: false,
        message: 'Student with this enrollment number or email already exists',
        conflict: existingStudent.enrollmentNo === enrollmentNo ? 'enrollmentNo' : 'email'
      });
    }

    // Create new student document
    const newStudent = new studentsModel({
      name,
      enrollmentNo,
      email,
      about,
      technicalSkills,
      projects,
      githubLink,
      linkedinLink: linkedinLink || undefined // Only include if provided
    });

    // Save to database
    const savedStudent = await newStudent.save();

    // Return success response with created student data (excluding sensitive fields if needed)
    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: {
        id: savedStudent._id,
        name: savedStudent.name,
        enrollmentNo: savedStudent.enrollmentNo,
        email: savedStudent.email,
        githubLink: savedStudent.githubLink,
        createdAt: savedStudent.createdAt
      }
    });

  } catch (error) {
    console.error("Error creating student:", error);

    // Handle specific mongoose validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    // Handle duplicate key error (even if our earlier check missed it)
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'Duplicate key error - student with this enrollment number or email already exists'
      });
    }

    // Generic error handler
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error"
    });
  }
};

//function to list students
const listStudents = async (req, res) => {
  try {
    // Pagination parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Sorting parameters
    const sortBy = req.query.sortBy || 'createdAt';
    const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;
    const sort = { [sortBy]: sortOrder };

    // Filtering parameters
    const filters = {};
    if (req.query.name) {
      filters.name = { $regex: req.query.name, $options: 'i' };
    }
    if (req.query.enrollmentNo) {
      filters.enrollmentNo = req.query.enrollmentNo;
    }
    if (req.query.technicalSkills) {
      filters.technicalSkills = { $in: req.query.technicalSkills.split(',') };
    }

    // Query database
    const students = await studentsModel.find(filters)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .select('-__v -updatedAt'); // Exclude unnecessary fields

    const totalStudents = await studentsModel.countDocuments(filters);
    const totalPages = Math.ceil(totalStudents / limit);

    res.status(200).json({
      success: true,
      data: students,
      pagination: {
        page,
        limit,
        totalStudents,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1
      }
    });

  } catch (error) {
    console.error('Error listing students:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error'
    });
  }
};

// function for removing student

const removeStudent = async (req, res) => {
  try {
    const { _id } = req.params; // Using _id to match your route parameter

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid student ID format'
      });
    }

    // Find and delete the student
    const deletedStudent = await studentsModel.findByIdAndDelete(_id);

    if (!deletedStudent) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: {
        id: deletedStudent._id,
        name: deletedStudent.name,
        enrollmentNo: deletedStudent.enrollmentNo
      }
    });

  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Internal server error'
    });
  }
};


export { addStudent, listStudents, removeStudent }