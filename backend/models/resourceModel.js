import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: [true, 'Subject name is required'],
    trim: true,
    maxlength: [100, 'Subject name cannot exceed 100 characters']
  },
  topicName: {
    type: String,
    required: [true, 'Topic name is required'],
    trim: true,
    maxlength: [200, 'Topic name cannot exceed 200 characters']
  },
  chapterName: {
    type: String,
    required: [true, 'Chapter name is required'],
    trim: true,
    maxlength: [100, 'Chapter name cannot exceed 100 characters']
  },
  teacherName: {
    type: String,
    required: [true, 'Teacher name is required'],
    trim: true,
    maxlength: [50, 'Teacher name cannot exceed 50 characters']
  },
  aboutTopic: {
    type: String,
    required: [true, 'About topic is required'],
    minlength: [100, 'About topic should be at least 100 characters'],
    maxlength: [2000, 'About topic cannot exceed 2000 characters']
  },
  accessLink: {
    type: String,
    required: [true, 'Access link is required'],
    match: [/^https?:\/\//i, 'Please enter a valid URL']
  },
  publishedDate: {
    type: Date,
    required: [true, 'Published date is required'],
    default: Date.now,
    validate: {
      validator: function (value) {
        return value <= new Date();
      },
      message: 'Published date cannot be in the future'
    }
  },
  resourceType: {
    type: String,
    required: [true, 'Resource type is required'],
    enum: {
      values: ['Lecture Notes', 'Video', 'Book', 'Article', 'Slides', 'Practice Problems', 'Other'],
      message: 'Please select a valid resource type'
    }
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  tags: {
    type: [String],
    validate: {
      validator: function (tags) {
        return tags.length <= 10;
      },
      message: 'Cannot have more than 10 tags'
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
resourceSchema.index({ subjectName: 1, chapterName: 1, teacherName: 1 });
resourceSchema.index({ resourceType: 1, isApproved: 1 });

// Middleware to validate published date before saving
resourceSchema.pre('save', function (next) {
  if (this.publishedDate > new Date()) {
    throw new Error('Published date cannot be in the future');
  }
  this.updatedAt = Date.now();
  next();
});

// Virtual property for formatted published date
resourceSchema.virtual('formattedPublishedDate').get(function () {
  return this.publishedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

const resourcesModel = mongoose.models.resources || mongoose.model('Resources', resourceSchema);

export default resourcesModel