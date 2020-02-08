const { fizzBuzzHandler } = require('./fizzBuzzHandler');

const fizzBuzz = (req, res) => {
  const output = fizzBuzzHandler(parseInt(req.query.count));
  res.status(200).json({'result': output})
}

module.exports = {
  fizzBuzz,
};
