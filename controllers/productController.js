const ProductService = require('../services/productService');

const productList = async (req, res) => {
  const productList = await ProductService.productList();
  console.log(1)
  return res.status(201).json({ productList });
};

const categoryList = async (req, res) => {
  const categoryList = await ProductService.categoryList();

  return res.status(201).json({ categoryList });
};

module.exports = { productList, categoryList };