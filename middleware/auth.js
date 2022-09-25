const displayPathOnConsole = async (req, res, next) => {
  console.log(req.url)
  next()
}

module.exports = { displayPathOnConsole }
