const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// get요청
const products = async (req, res) => {
  try {
    const drinks = await prisma.$queryRaw`SELECT * FROM drinks;`;
    res.status(200).send(drinks);
  } catch (err) {
    res.status(500).send(err);
  }
};
// post요청
const createProduct = async (req, res) => {
  try {
    const { id, korean_name, english_name, drink_info, is_new, category_id } = req.body;
    await prisma.$queryRaw`INSERT INTO drinks (id, korean_name, english_name, drink_info, is_new, category_id) VALUES (${id}, ${korean_name}, ${english_name}, ${drink_info}, ${is_new}, ${category_id});`;
    const drinks = await prisma.$queryRaw`SELECT * FROM drinks;`;
    res.status(201).send(drinks);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
// put요청
const updateProduct = async (req, res) => {
  try {
    const { id } = req.query;
    await prisma.drinks.update({
      where: {
        id: +id,
      },
      data: {
        english_name: 'new_coffe',
      },
    });
    const drinks = await prisma.drinks.findMany({
      select: {
        id: true,
        english_name: true,
      },
    });
    res.status(202).send(drinks);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
  // 쿼리문으로 update하기
  // try {
  //   await prisma.$queryRaw`UPDATE drinks SET english_name = 'new_coffee' WHERE id = ${req.body.id};`;
  //   const drinks = await prisma.$queryRaw`SELECT * FROM drinks;`;
  //   res.status(202).send(drinks);
  // } catch (err) {
  //   res.status(500).send(err);
  // }
};
// delete요청
const deleteProduct = async (req, res) => {
  try {
    await prisma.$queryRaw`DELETE FROM drinks WHERE id=${req.body.id};`;
    const drinks = await prisma.$queryRaw`SELECT * FROM drinks;`;
    res.status(203).send(drinks);
  } catch (err) {
    res.status(500).send(err);
  }
};


export {products, createProduct, updateProduct, deleteProduct }