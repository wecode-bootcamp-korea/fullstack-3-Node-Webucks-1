const prisma = require('./index');

const getCategories = async () => {
  const productCategories = await prisma.$queryRaw`
    SELECT * FROM categories`;
  return productCategories;
  }
  
const getDetail = async () => {
  const productDetail = await prisma.$queryRaw`
  SELECT korean_name, english_name, categories.category_name, images.image_url FROM products 
  JOIN categories 
  ON products.category_id = categories.id
  JOIN images
  ON products.id = images.product_id;`;
  
  return productDetail;
}
  
const getList = async () => {
  const productList = await prisma.$queryRaw`
    SELECT id,korean_name,english_name FROM products`;
  return productList;
}
  
module.exports = { getCategories, getDetail, getList }