import { productDao, userDao } from '../models';

const getProducts = async () => {
  const drinks = await productDao.getProducts();
  if (!drinks) throw new Error('DB에 값이 없음');
  return drinks;
};

const createProducts = async (id, korean_name, english_name, drink_info, is_new, category_id) => {
  const [isId] = await productDao.getList(id);
  if (isId) throw new Error(`음료가 추가되지 않았습니다.`);
  await productDao.createProducts(id, korean_name, english_name, drink_info, is_new, category_id);
  const [issId] = await productDao.getList(id);
  return issId;
};

const updateProduct = async (id) => {
  const [isId] = await productDao.getList(id);
  if (!isId) throw new Error(`${id}번째 음료는 존재하지 않습니다.`);
  await productDao.updateProduct(id);
  const [issId] = await productDao.getList(id);
  return issId;
};

const deleteProduct = async (id) => {
  const [isId] = await productDao.getList(id);
  if (!isId) throw new Error(`${id}번째 음료는 존재하지 않습니다.`);
  await productDao.deleteProduct(id);
  return;
};

const likeProduct = async (id, userId) => {
  const isDrink = await productDao.getProducts();
  if (!isDrink[id - 1]) throw new Error('그런 음료는 없습니다.');
  await productDao.insertLike(id, userId);
  const like = await productDao.showLike();
  return like;
};

const likeDeleteProduct = async (id, userId) => {
  await productDao.deleteLike(id, userId);
  const like = await productDao.showLike();
  return like;
};

export default { getProducts, createProducts, updateProduct, deleteProduct, likeProduct, likeDeleteProduct };
