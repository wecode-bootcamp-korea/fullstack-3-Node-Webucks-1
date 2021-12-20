const { v4: uuidv4 } = require('uuid');
const { coffeeData } = require('./coffeeData');

const createProduct = (req, res) => {
  const products = coffeeData;
  // console.log('Request body: ', req.body);
  const { koreanName, englishName, imageUrl, categoryId } = req.body;
  const coffee = {
    id: uuidv4(),
    koreanName: koreanName,
    englishName: englishName,
    imageUrl: imageUrl,
    categoryId: categoryId,
  };

  coffeeData.push(coffee);
  res.status(201).json({ data: products });
};

module.exports = { createProduct };