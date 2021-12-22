const productDao = require("../models/productDao");

const getCategories = async () => {
  try {
    const productCategories = await productDao.getCategories();

    return productCategories;
  } catch (err) {
    console.log(err);
  }
}

const getDetail = async () => {
  try {
    const productDetail = await productDao.getDetail();

    return productDetail;
  } catch (err) {
    console.log(err);
  }
}

const getList = async () => {
  try {
    const productList = await productDao.getList();

    return productList;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getCategories, getDetail, getList }