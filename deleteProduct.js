const { coffeeData } = require('./coffeeData');

const deleteProduct = (req, res) => {
  const products = coffeeData;

  const { id } = req.body;

  const product = products.find(product => product.id === id)
  const index = products.indexOf(product);
  products.splice(index, 1);
  res.json({ data: products });
  res.status(204);
};

module.exports = { deleteProduct };