const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../error/index')
const QuestionMCQ = require('../model/QuestionMCQ')

// register
const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all values')
  }
  const question = await QuestionMCQ.create(req.body)

  res.status(StatusCodes.CREATED).json({ question })
}

// login
const loginUser = async (req, res) => {
  // const { email, password } = req.body

  // if (!email || !password) {
  //   throw new BadRequestError('Please provide all values')
  // }
  // res.status(200).json({
  //   success: true,
  //   message: 'successfull',
  //   user: req.user,
  // })
  if (req.user) {
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'successfull',
      user: req.user,
    })
  }
}

// update
const updateUser = async (req, res) => {
  const { name, email, password } = req.body

  if (!email || !name || !password) {
    throw new BadRequestError('Please provide all values')
  }

  res.status(StatusCodes.OK).json({
    name,
    email,
    password,
  })
}
module.exports = { registerUser, loginUser, updateUser }

// {
//    "Question": "question 1",
//    "questionType": "mcq",
//    "options1": "option1",
//    "options2": "option2",
//     "options3": "option3",
//     "point": 234
// }
