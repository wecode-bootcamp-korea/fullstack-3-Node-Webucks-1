const { productList } = require("./productList")

const updateProduct = (req, res) => {
  const { id } = req.body;
  const update = data.filter((e) => e.id === id);
  update.englishName = "newCoffee";
  res.json(productList);
};

module.exports = { updateProduct };
