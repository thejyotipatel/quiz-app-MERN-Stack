const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../error/index')
const QuestionMCQ = require('../model/QuestionMCQ')
const createQuizs = async (req, res) => {
  const { Question, questionType, options1, options2, options3, point } =
    req.body

  if (
    !Question ||
    !questionType ||
    !options1 ||
    !options2 ||
    !options3 ||
    !point
  ) {
    throw new BadRequestError('Please provide all values')
  }
  // req.body.createdBy = req.user.userId
  const question = await QuestionMCQ.create(req.body)

  res.status(StatusCodes.CREATED).json({ question })
}
const getQuize = async (req, res) => {
  const { search, searchStatus, searchType, sort } = req.query
  // const queryObject = {
  //   createdBy: req.user.userId,
  // }

  // if (searchStatus && searchStatus !== 'all') {
  //   queryObject.searchStatus = searchStatus
  // }

  res.status(StatusCodes.CREATED).json({
    search,
    searchStatus,
    searchType,
    sort,
  })
}

module.exports = {
  createQuizs,
  getQuize,
}
