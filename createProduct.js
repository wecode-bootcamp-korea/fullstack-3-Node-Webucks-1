const {productList} = require("./productList")

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
    res.json(productList);
    res.status(201);
  };

module.exports = {createProduct}