import { productDao, userDao } from '../models';
import jwt from 'jsonwebtoken';

const getProducts = async (token) => {
  const Authorization = jwt.verify(token, 'abcd').id;
  if (!(await userDao.validId(Authorization))) throw new Error('권한이 없습니다.');
  const drinks = await productDao.getProducts();
  if (!drinks) throw new Error('DB에 값이 없음');
  return drinks;
};

const createProducts = async (id, korean_name, english_name, drink_info, is_new, category_id, token) => {
  const Authorization = jwt.verify(token, 'abcd').id;
  if (!(await userDao.validId(Authorization))) throw new Error('권한이 없습니다.');
  const isId = await productDao.getProducts();
  if (isId[id - 1]) throw new Error('음료가 추가 되지 않았습니다.');
  const drinks = await productDao.createProducts(id, korean_name, english_name, drink_info, is_new, category_id);
  return drinks;
};

const updateProduct = async (id, token) => {
  const Authorization = jwt.verify(token, 'abcd').id;
  if (!(await userDao.validId(Authorization))) throw new Error('권한이 없습니다.');
  const isId = await productDao.getProducts();
  if (!isId[id - 1]) throw new Error(`${id}번째 음료는 존재하지 않습니다.`);
  const drinks = await productDao.updateProduct(id);
  return drinks;
};

const deleteProduct = async (id, token) => {
  const Authorization = jwt.verify(token, 'abcd').id;
  if (!(await userDao.validId(Authorization))) throw new Error('권한이 없습니다.');
  const isId = await productDao.getProducts();
  if (!isId[id - 1]) throw new Error(`${id}번째 음료는 존재하지 않습니다.`);
  const drinks = await productDao.deleteProduct(id);
  return drinks;
};

// async function authorization(token) {
//   const error = new Error('권한이 없습니다.');
//   const [isToken] = await userDao.isToken(token);
//   if (!isToken) throw error;
// }

export default { getProducts, createProducts, updateProduct, deleteProduct };
