const { coffeeData } = require('./coffeeData');

const updateList = (req, res) => {
  const products = coffeeData;

  const { id } = req.body;
  const updateTitle = products.filter((product) => product.id === id);
  updateTitle[0].englishName = 'newCoffee';
  res.json({ data: updateTitle });
};

module.exports = { updateList };
