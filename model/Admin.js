const mongoose = require('mongoose')
const validator = require('validator')

const AdminSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Admin', AdminSchema)
