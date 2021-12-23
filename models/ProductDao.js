const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// 제품 목록 조회
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

// 제품 조회
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

// 제품 생성
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

// 제품 내용 수정
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

// 제품 삭제
const deleteProduct = async (id) => {
  const product = await prisma.$queryRaw`
    DELETE FROM 
      products
    WHERE 
      id=${id}
  `;
};

// 카테고리 목록 조회
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

// 제품 번호로 하트 조회
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
