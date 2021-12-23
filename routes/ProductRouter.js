const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController');
const { validateToken } = require('../middlewares/validateToken');

router.get('/', ProductController.productList);
router.get('/categories', ProductController.categoryList);
router.post('/', validateToken, ProductController.postProduct);
router.post('/:productId', validateToken, ProductController.productDetail);
router.patch('/:productId', validateToken, ProductController.updateProduct);
router.delete('/:productId', validateToken, ProductController.deleteProduct);

module.exports = router;
