import mongoose from 'mongoose'

const QuestionPlainTextSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, 'Please provide Question'],
    },
    answer: {
      type: String,
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
export default mongoose.model('QuestionPlainText', QuestionPlainTextSchema)
