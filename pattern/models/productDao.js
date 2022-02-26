import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// list 가져오기
const getProducts = async () => {
  const drinks = await prisma.$queryRaw`select id,korean_name, english_name from drinks;`;
  return drinks;
};
// coffee list에 추가하기
const createProducts = async (id, korean_name, english_name, drink_info, is_new, category_id) => {
  await prisma.$queryRaw`
    INSERT INTO drinks (id, korean_name, english_name, drink_info, is_new, category_id) 
    VALUES (${id}, ${korean_name}, ${english_name}, ${drink_info}, ${is_new}, ${category_id});`;
  return;
};
// coffee english_name 변경하기
const updateProduct = async (id) => {
  await prisma.drinks.update({
    where: {
      id: +id,
    },
    data: {
      english_name: 'new_coffe',
    },
  });
  return;
};
// 삭제
const deleteProduct = async (id) => {
  await prisma.$queryRaw`DELETE FROM drinks WHERE id=${id}`;
  return;
};
// list 참조용도
const getList = async (id) => {
  const drinks = await prisma.$queryRaw`select id, korean_name from drinks where id = ${id};`;
  return drinks;
};
// 좋아요 넣기
const insertLike = async (id, userId) => {
  await prisma.$queryRaw`
    INSERT INTO likeDrinks (drink_id, user_id)
    VALUES (${id}, ${userId});
  `;
  return;
};
// 좋아요 지우기
const deleteLike = async (id, userId) => {
  await prisma.$queryRaw`
    DELETE FROM likeDrinks WHERE (drink_id = ${id} and user_id = ${userId});
  `;
  return;
};
// like 참조용도
const showLike = async () => {
  const like = await prisma.$queryRaw`
  SELECT id, drink_id, user_id FROM likeDrinks
`;
  return like;
};

export default { getProducts, createProducts, updateProduct, deleteProduct, getList, insertLike, deleteLike, showLike };
