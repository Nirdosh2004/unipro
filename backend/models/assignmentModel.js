import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
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
  teacherName: {
    type: String,
    required: [true, 'Teacher name is required'],
    trim: true,
    maxlength: [50, 'Teacher name cannot exceed 50 characters']
  },
  paragraphs: {
    paraOne: {
      type: String,
      required: [true, 'Paragraph 1 is required'],
      minlength: [50, 'Paragraph 1 should be at least 50 characters'],
      maxlength: [1000, 'Paragraph 1 cannot exceed 1000 characters']
    },
    paraTwo: {
      type: String,
      required: [true, 'Paragraph 2 is required'],
      minlength: [50, 'Paragraph 2 should be at least 50 characters'],
      maxlength: [1000, 'Paragraph 2 cannot exceed 1000 characters']
    },
    paraThree: {
      type: String,
      required: [true, 'Paragraph 3 is required'],
      minlength: [50, 'Paragraph 3 should be at least 50 characters'],
      maxlength: [1000, 'Paragraph 3 cannot exceed 1000 characters']
    },
    paraFour: {
      type: String,
      required: false,
      minlength: [50, 'Paragraph 4 should be at least 50 characters if provided'],
      maxlength: [1000, 'Paragraph 4 cannot exceed 1000 characters']
    },
    paraFive: {
      type: String,
      required: false,
      minlength: [50, 'Paragraph 5 should be at least 50 characters if provided'],
      maxlength: [1000, 'Paragraph 5 cannot exceed 1000 characters']
    }
  },
  assignedDate: {
    type: Date,
    required: [true, 'Assigned date is required'],
    default: Date.now
  },
  dueDate: {
    type: Date,
    required: [true, 'Due date is required'],
    validate: {
      validator: function (value) {
        return value > this.assignedDate;
      },
      message: 'Due date must be after assigned date'
    }
  },
  attachments: [{
    name: {
      type: String,
      required: [true, 'Attachment name is required'],
      maxlength: [100, 'Attachment name cannot exceed 100 characters']
    },
    url: {
      type: String,
      required: [true, 'Attachment URL is required'],
      match: [/^https?:\/\//i, 'Please enter a valid URL']
    }
  }],
  isActive: {
    type: Boolean,
    default: true
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
assignmentSchema.index({ subjectName: 1, teacherName: 1, dueDate: 1 });

// Middleware to validate dates before saving
assignmentSchema.pre('save', function (next) {
  if (this.dueDate <= this.assignedDate) {
    throw new Error('Due date must be after assigned date');
  }
  this.updatedAt = Date.now();
  next();
});

// Virtual property for assignment status
assignmentSchema.virtual('status').get(function () {
  const now = new Date();
  if (now > this.dueDate) return 'Overdue';
  if (now > new Date(this.dueDate.getTime() - 3 * 24 * 60 * 60 * 1000)) return 'Due Soon';
  return 'Active';
});

const assignmentsModel = mongoose.models.assignments || mongoose.model('Assignments', assignmentSchema);

export default assignmentsModel;