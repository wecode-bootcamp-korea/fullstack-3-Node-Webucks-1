const { productList } = require("./data/productList");

const updateProduct = (req, res) => {
  const { id } = req.body;
  const update = productList.filter((product) => product.id === id);
  update[0].englishName = "newCoffee";
  res.status(200).json({ data: productList });
};

module.exports = { updateProduct };
