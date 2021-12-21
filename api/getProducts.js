const { productList } = require("./data/productList");

const getProductList = (req, res) => {
  res.status(200).json({ data: productList });
};

module.exports = { getProductList };
