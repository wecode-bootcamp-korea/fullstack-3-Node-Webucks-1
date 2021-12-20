const { coffeeData } = require('./coffeeData');

const updateProduct = (req, res) => {
  const products = coffeeData;

  const { id } = req.body;
  const updateName = products.filter((product) => product.id === id);
  updateName[0].englishName = "newCoffee";
  res.json({ data: products });
};

module.exports = { updateProduct };