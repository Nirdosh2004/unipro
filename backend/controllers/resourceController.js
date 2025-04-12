import mongoose from 'mongoose';
import resourcesModel from '../models/resourceModel.js'; // adjust the path based on your project

export const addResource = async (req, res) => {
  try {
    const {
      subjectName,
      topicName,
      chapterName,
      teacherName,
      aboutTopic,
      accessLink,
      publishedDate,
      resourceType,
      tags
    } = req.body;

    // Create a new resource document
    const newResource = new resourcesModel({
      subjectName,
      topicName,
      chapterName,
      teacherName,
      aboutTopic,
      accessLink,
      publishedDate,
      resourceType,
      tags
    });

    const savedResource = await newResource.save();

    res.status(201).json({
      success: true,
      message: 'Resource added successfully',
      data: savedResource
    });
  } catch (error) {
    console.error('Error adding resource:', error);
    res.status(400).json({
      success: false,
      message: 'Failed to add resource',
      error: error.message
    });
  }
};

export const listResource = async (req, res) => {
  try {
    const resources = await resourcesModel.find({ isApproved: true }).sort({ publishedDate: -1 });

    res.status(200).json({
      success: true,
      count: resources.length,
      data: resources
    });
  } catch (error) {
    console.error('Error fetching resources:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch resources',
      error: error.message
    });
  }
};

export const removeResource = async (req, res) => {
  try {
    const { _id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid resource ID',
      });
    }

    const deletedResource = await resourcesModel.findByIdAndDelete(_id);

    if (!deletedResource) {
      return res.status(404).json({
        success: false,
        message: 'Resource not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Resource removed successfully',
      data: deletedResource,
    });
  } catch (error) {
    console.error('Error removing resource:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to remove resource',
      error: error.message,
    });
  }
};