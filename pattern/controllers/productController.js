import { productServices } from '../services';

const getProduct = async (req, res) => {
  try {
    const drinks = await productServices.getProducts();
    res.status(200).send(drinks);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const { id, korean_name, english_name, drink_info, is_new, category_id } = req.body;
    const requiredKey = { id, korean_name, english_name, drink_info, is_new, category_id };

    for (let key in requiredKey) {
      if (!requiredKey[key]) res.status(400).send('양식이 올바르지 않습니다.');
    }
    const drinks = await productServices.createProducts(id, korean_name, english_name, drink_info, is_new, category_id);
    res.status(201).send(`List의 ${drinks.id}번째 : ${drinks.korean_name}가 추가되었습니다.`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.query;
    const drinks = await productServices.updateProduct(id);
    res.status(202).send(drinks);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.query;
    await productServices.deleteProduct(id);
    res.status(203).send(`${id}번 음료 삭제완료`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const likeProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req;
    const requiredKey = { id, userId };

    for (let key in requiredKey) {
      if (!requiredKey[key]) return res.status(400).send('양식이 올바르지 않습니다.');
    }

    const like = await productServices.likeProduct(id, userId);

    res.status(200).send(like);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

export default { getProduct, createProduct, updateProduct, deleteProduct, likeProduct };
