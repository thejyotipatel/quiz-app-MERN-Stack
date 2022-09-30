const mongoose = require('mongoose')
const validator = require('validator')

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    required: [true, 'Please provide email'],
    unique: true,
  },
})

export default mongoose.model('Student', StudentSchema)
