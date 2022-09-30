const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, 'Please provide Question'],
    },
    options1: {
      type: String,
      required: [true, 'Please provide options'],
    },
    options2: {
      type: String,
      required: [true, 'Please provide options'],
    },
    options3: {
      type: String,
      required: [true, 'Please provide options'],
    },
    options4: {
      type: String,
      required: [true, 'Please provide options'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model('Question', QuestionSchema)
