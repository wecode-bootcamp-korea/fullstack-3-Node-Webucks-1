const { coffeeData } = require('./coffeeData');

const list = (req, res) => {
  res.json(coffeeData);
};

module.exports = { list };