const { coffeeData } = require('./coffeeData');

const deleteList = (req, res) => {
  const products = coffeeData;

  const { id } = req.body;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product && product.id === id) {
      delete products[i];
      return res.status(204).send('커피 정보 삭제 완료!');
    }
  }
};

module.exports = { deleteList };
