const { productList } = require("./productList");

const deleteProduct = (req, res) => {
  const { id } = req.body;
  const del = productList.data.find((e) => e.id === parseInt(id));
  const index = productList.data.indexOf(del);
  productList.data.splice(index, 1);
  res.json(productList);
};

module.exports = { deleteProduct };
