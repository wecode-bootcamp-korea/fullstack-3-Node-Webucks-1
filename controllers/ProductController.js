const ProductServies = require('../services/ProductServies');

const productList = async (req, res) => {
  const productList = await ProductServies.productList();

  return res.status(201).json({ productList });
};

const categoryList = async (req, res) => {
  const categoryList = await ProductServies.categoryList();

  return res.status(201).json({ categoryList });
};

module.exports = { productList, categoryList };
