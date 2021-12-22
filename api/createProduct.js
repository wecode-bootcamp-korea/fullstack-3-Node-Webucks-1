const { productList } = require("./data/productList");

const createProduct = (req, res) => {
  const { id, koreanName, englishName, imageUrl, categoryId } = req.body;
  const product = {
    id: id,
    koreanName: koreanName,
    englishName: englishName,
    imageUrl: imageUrl,
    categoryId: categoryId,
  };
  productList.data.push(product);
  res.status(201).json({ data: productList });
};

module.exports = { createProduct };
