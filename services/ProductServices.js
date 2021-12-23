const { is } = require('express/lib/request');
const ProductDao = require('../models/ProductDao');

// 제품 목록 조회
const productList = async () => {
  const product = await ProductDao.getProducts();

  return product;
};

// 제품 조회
const productDetail = async (productId) => {
  const product = await ProductDao.getProduct(productId);

  return product;
};

// 제품 생성
const postProduct = async (
  koreanName,
  englishName,
  productInfo,
  isNew,
  categoriesId
) => {
  const product = await ProductDao.createProduct(
    koreanName,
    englishName,
    productInfo,
    isNew,
    categoriesId
  );

  return product;
};

// 제품 내용 수정
const updateProduct = async (
  id,
  koreanName,
  englishName,
  productInfo,
  isNew,
  categoriesId
) => {
  const productData = {
    koreanName,
    englishName,
    productInfo,
    isNew,
    categoriesId,
  };

  for (data in productData) {
    if (productData[data]) {
      if (data === 'isNew') {
        await ProductDao.updateProduct(
          id,
          data,
          Boolean(Number(productData[data]))
        );
      } else if (data === 'categoriesId') {
        await ProductDao.updateProduct(id, data, Number(productData[data]));
      } else {
        await ProductDao.updateProduct(id, data, productData[data]);
      }
    }
  }

  return;
};

// 제품 삭제
const deleteProduct = async (id) => {
  await ProductDao.deleteProduct(id);
};

// 카테고리 목록 조회
const categoryList = async () => {
  const category = await ProductDao.getCategory();

  return category;
};

// 하트 조회
const findHeart = async (productId, userId) => {
  const heart = await ProductDao.getHeartByProductId(productId);

  for (index in heart) {
    if (heart[index].usersId === userId) {
      return heart[index];
    }
  }
};

module.exports = {
  productList,
  productDetail,
  postProduct,
  updateProduct,
  deleteProduct,
  categoryList,
  findHeart,
};
