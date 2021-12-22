const Productservices = require('../services/ProductServices');

const productList = async (req, res) => {
  const productList = await Productservices.productList();

  return res.status(201).json({ productList });
};

const categoryList = async (req, res) => {
  const categoryList = await Productservices.categoryList();

  return res.status(201).json({ categoryList });
};

module.exports = { productList, categoryList };
