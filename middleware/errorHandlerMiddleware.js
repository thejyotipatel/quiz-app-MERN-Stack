const errorHandlerMiddleware = async (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || 500,
    msg: err.message || 'Something went wrong try again later',
  }

  if (err.code && err.code === 11000) {
    defaultError.statusCode = 400
    defaultError.msg = err.code
  }

  res.status(defaultError.statusCode).json({ msg: defaultError.msg })
}

module.exports = errorHandlerMiddleware
