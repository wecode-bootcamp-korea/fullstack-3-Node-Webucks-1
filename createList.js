const { v4: uuidv4 } = require('uuid');
const { list } = require('./list');
const { coffeeData } = require('./coffeeData');

const createList = (req, res) => {
  const products = coffeeData;
  // console.log('Request body: ', req.body); // client로 부터 받은 정보를 확인합니다.
  const { koreanName, englishName, imageUrl, categoryId } = req.body;
  const coffee = {
    id: uuidv4(),
    koreanName: koreanName,
    englishName: englishName,
    imageUrl: imageUrl,
    categoryId: categoryId,
  };
  products.push(coffee);
  // res.json({ data: products });
  res.status(201).json({ data: products });
};

module.exports = { createList };
