import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// list 가져오기
const getProducts = async () => {
  try {
    const drinks = await prisma.$queryRaw`select * from drinks;`;
    return drinks;
  } catch (err) {
    console.log('models error : ', err.message);
  }
};
// coffee list에 추가하기
const createProducts = async (id, korean_name, english_name, drink_info, is_new, category_id) => {
  try {
    await prisma.$queryRaw`INSERT INTO drinks (id, korean_name, english_name, drink_info, is_new, category_id) VALUES (${id}, ${korean_name}, ${english_name}, ${drink_info}, ${is_new}, ${category_id});`;

    const drinks = await prisma.$queryRaw`select * from drinks where id=${id}`;
    return drinks;
  } catch (err) {
    console.log(err);
  }
};
// coffee english_name 변경하기
const updateProduct = async (id) => {
  try {
    await prisma.drinks.update({
      where: {
        id: +id,
      },
      data: {
        english_name: 'new_coffe',
      },
    });
    const drinks = await prisma.drinks.findFirst({
      where: {
        id: +id,
      },
      select: {
        id: true,
        english_name: true,
      },
    });
    return drinks;
  } catch (err) {
    console.log(err.message);
  }
};
// 삭제
const deleteProduct = async (id) => {
  try {
    await prisma.drinks.delete({
      where: {
        id: +id,
      },
    });
    const drinks = await prisma.drinks.findFirst({
      where: {
        id: +id,
      },
      select: {
        id: true,
        english_name: true,
      },
    });
    return drinks;
  } catch (err) {
    console.log(err.message);
  }
};
export default { getProducts, createProducts, updateProduct, deleteProduct };
