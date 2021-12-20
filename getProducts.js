const {productList} = require("./productList")

const getProductList = (req, res) => {
  res.json(productList);
};

// const createProduct = (req, res) => {
//   const { id, koreanName, englishName, imageUrl, categoryId } = req.body;
//   const product = {
//     id: id,
//     koreanName: koreanName,
//     englishName: englishName,
//     imageUrl: imageUrl,
//     categoryId: categoryId,
//   };
//   list.data.push(product);
//   res.json(productList);
//   res.status(201);
// };

// const updateProduct = (req, res) => {
//   const { id } = req.body;
//   const update = data.filter((e) => e.id === id);
//   update.englishName = "newCoffee";
//   res.json(productList);
// };

// const deleteProduct = (req, res) => {
//   const { id } = req.body;
//   const del = productList.data.find((e) => e.id === parseInt(id));
//   const index = productList.data.indexOf(del);
//   productList.data.splice(index, 1);
//   res.json(productList);
// };

module.exports = { getProductList };
