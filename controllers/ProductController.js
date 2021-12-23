const Productservices = require('../services/ProductServices');

// 제품 목록 조회
const productList = async (req, res) => {
  const productList = await Productservices.productList();

  return res.status(200).json({ productList });
};

// 제품 조회
const productDetail = async (req, res) => {
  const { productId } = req.params;
  const [{ id: userId }] = req.findUser;

  const product = await Productservices.productDetail(productId);
  const findHeart = await Productservices.findHeart(productId, userId);

  return res.status(200).json({ product, findHeart });
};

// 제품 생성
const postProduct = async (req, res) => {
  const { koreanName, englishName, productInfo, isNew, categoriesId } =
    req.body;
  await Productservices.postProduct(
    koreanName,
    englishName,
    productInfo,
    isNew,
    categoriesId
  );

  return res.status(201).json({ message: 'CREATE_SUCCESS' });
};

// 제품 내용 수정
const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { koreanName, englishName, productInfo, isNew, categoriesId } =
    req.body;

  await Productservices.updateProduct(
    productId,
    koreanName,
    englishName,
    productInfo,
    isNew,
    categoriesId
  );

  return res.status(200).json({ message: 'UPDATE_SUCCESS' });
};

// 제품 삭제
const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  await Productservices.deleteProduct(productId);

  return res.status(204).json();
};

// 카테고리 목록 조회
const categoryList = async (req, res) => {
  const categoryList = await Productservices.categoryList();

  return res.status(200).json({ categoryList });
};

module.exports = {
  productList,
  postProduct,
  updateProduct,
  deleteProduct,
  categoryList,
  productDetail,
};
