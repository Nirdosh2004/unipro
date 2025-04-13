import mongoose from "mongoose"
import assignmentsModel from "../models/assignmentModel.js"

// function to add assignment

const addAssignment = async (req, res) => {
  try {
    // Check if request body exists
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body is empty"
      });
    }

    // Destructure with proper defaults
    const {
      subjectName,
      topicName,
      teacherName,
      paragraphs = {
        paraOne: '',
        paraTwo: '',
        paraThree: '',
        paraFour: '',
        paraFive: ''
      },
      dueDate,
      attachments = []
    } = req.body;

    // Validate required fields
    const requiredFields = {
      subjectName,
      topicName,
      teacherName,
      'paragraphs.paraOne': paragraphs.paraOne,
      'paragraphs.paraTwo': paragraphs.paraTwo,
      'paragraphs.paraThree': paragraphs.paraThree,
      dueDate
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    // Validate paragraph lengths
    const validateParagraph = (para, index, required = true) => {
      if (!para && !required) return null;
      if (!para) return `Paragraph ${index} is required`;
      if (para.length < 50) return `Paragraph ${index} must be at least 50 characters`;
      if (para.length > 1000) return `Paragraph ${index} cannot exceed 1000 characters`;
      return null;
    };

    const paragraphErrors = [
      validateParagraph(paragraphs.paraOne, 1),
      validateParagraph(paragraphs.paraTwo, 2),
      validateParagraph(paragraphs.paraThree, 3),
      validateParagraph(paragraphs.paraFour, 4, false),
      validateParagraph(paragraphs.paraFive, 5, false)
    ].filter(error => error !== null);

    if (paragraphErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Paragraph validation failed',
        errors: paragraphErrors
      });
    }

    // Validate attachments
    const attachmentErrors = attachments
      .map((att, index) => {
        if (!att?.name || !att?.url) {
          return `Attachment ${index + 1} requires both name and URL`;
        }
        return null;
      })
      .filter(error => error !== null);

    if (attachmentErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Attachment validation failed',
        errors: attachmentErrors
      });
    }

    // Create and save assignment
    const newAssignment = new assignmentsModel({
      subjectName,
      topicName,
      teacherName,
      paragraphs,
      dueDate: new Date(dueDate),
      attachments,
      assignedDate: new Date()
    });

    const savedAssignment = await newAssignment.save();

    res.status(201).json({
      success: true,
      message: "Assignment created successfully",
      data: {
        id: savedAssignment._id,
        subjectName: savedAssignment.subjectName,
        topicName: savedAssignment.topicName,
        status: savedAssignment.status,
        dueDate: savedAssignment.dueDate,
        createdAt: savedAssignment.createdAt
      }
    });

  } catch (error) {
    console.error("Error creating assignment:", error);

    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: error.message || "Internal server error"
    });
  }
};


// function to list assignment
const listAssignment = async (req, res) => {
  try {
    const assignments = await assignmentsModel.find({ isActive: true }).sort({ dueDate: 1 });

    res.status(200).json({
      success: true,
      count: assignments.length,
      data: assignments
    });
  } catch (error) {
    console.error('Error fetching assignments:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch assignments',
      error: error.message
    });
  }
};

// function to remove assignment
const removeAssignment = async (req, res) => {
  try {
    const { _id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid assignment ID',
      });
    }

    const deletedAssignment = await assignmentsModel.findByIdAndDelete(_id);

    if (!deletedAssignment) {
      return res.status(404).json({
        success: false,
        message: 'Assignment not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Assignment removed successfully',
      data: deletedAssignment,
    });
  } catch (error) {
    console.error('Error removing assignment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to remove assignment',
      error: error.message,
    });
  }
};

// export const singleAssignment = async () => {

// }

export { addAssignment, listAssignment, removeAssignment }