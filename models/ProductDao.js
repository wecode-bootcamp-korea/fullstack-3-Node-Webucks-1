const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getProducts = async () => {
  const product = await prisma.$queryRaw`
    SELECT 
      id, 
      koreanName, 
      englishName, 
      productInfo, 
      isNew, 
      categoriesId 
    FROM 
      products
  `;

  return product;
};

const getProduct = async (productId) => {
  const product = await prisma.$queryRaw`
    SELECT
      id,
      koreanName,
      englishName,
      productInfo,
      isNew,
      categoriesId
    FROM
      products
    WHERE
      id=${productId}
  `;

  return product;
};

const createProduct = async (
  koreanName,
  englishName,
  productInfo,
  isNew,
  categoriesId
) => {
  const product = await prisma.$queryRaw`
    INSERT INTO products 
    (
      koreanName, 
      englishName, 
      productInfo, 
      isNew, 
      categoriesId
    ) 
    VALUES 
    (
      ${koreanName},
      ${englishName}, 
      ${productInfo}, 
      ${isNew}, 
      ${categoriesId}
    );`;

  return product;
};

const updateProduct = async (id, key, value) => {
  const product = await prisma.products.update({
    where: {
      id: Number(id),
    },
    data: {
      [key]: value,
    },
  });

  return product;
};

const deleteProduct = async (id) => {
  const product = await prisma.$queryRaw`
    DELETE FROM 
      products
    WHERE 
      id=${id}
  `;
};

const getCategory = async () => {
  const category = await prisma.$queryRaw`
    SELECT 
      id, 
      name 
    FROM 
      categories
  `;

  return category;
};

const getHeartByProductId = async (productId) => {
  const heart = await prisma.$queryRaw`
    SELECT
      id,
      usersId,
      productsId
    FROM
      heart
    WHERE
      productsId=${productId}
  `;

  return heart;
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategory,
  getHeartByProductId,
};
