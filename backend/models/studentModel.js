const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  enrollmentNo: {
    type: String,
    required: [true, 'Enrollment number is required'],
    unique: true,
    match: [/^[A-Za-z0-9\-]+$/, 'Please enter a valid enrollment number']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  about: {
    type: String,
    required: [true, 'About section is required'],
    minlength: [50, 'About should be at least 50 characters'],
    maxlength: [500, 'About cannot exceed 500 characters']
  },
  technicalSkills: {
    type: [String],
    required: [true, 'At least one technical skill is required'],
    validate: {
      validator: function (skills) {
        return skills.length > 0 && skills.length <= 15;
      },
      message: 'Please provide between 1-15 technical skills'
    }
  },
  projects: {
    type: [{
      title: {
        type: String,
        required: [true, 'Project title is required'],
        maxlength: [100, 'Project title cannot exceed 100 characters']
      },
      bio: {
        type: String,
        required: [true, 'Project bio is required'],
        minlength: [30, 'Project bio should be at least 30 characters'],
        maxlength: [300, 'Project bio cannot exceed 300 characters']
      },
      technologies: {
        type: [String],
        required: [true, 'At least one technology is required'],
        validate: {
          validator: function (techs) {
            return techs.length > 0 && techs.length <= 10;
          },
          message: 'Please provide between 1-10 technologies per project'
        }
      },
      githubLink: {
        type: String,
        match: [/^https?:\/\/(www\.)?github\.com\/.+/i, 'Please enter a valid GitHub URL']
      },
      liveLink: {
        type: String,
        match: [/^https?:\/\//i, 'Please enter a valid URL']
      }
    }],
    validate: {
      validator: function (projects) {
        return projects.length >= 1 && projects.length <= 4;
      },
      message: 'Please provide between 1-4 projects'
    }
  },
  githubLink: {
    type: String,
    required: [true, 'GitHub profile link is required'],
    match: [/^https?:\/\/(www\.)?github\.com\/.+/i, 'Please enter a valid GitHub URL']
  },
  linkedinLink: {
    type: String,
    match: [/^https?:\/\/(www\.)?linkedin\.com\/.+/i, 'Please enter a valid LinkedIn URL']
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

// Index for faster search on frequently queried fields
studentSchema.index({ enrollmentNo: 1, email: 1, name: 1 });

// Middleware to update the updatedAt field
studentSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const studentsModel = mongoose.models.students || mongoose.model('Students', studentSchema);

export default studentsModel