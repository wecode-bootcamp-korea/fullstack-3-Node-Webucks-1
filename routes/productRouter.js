const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/productController');

router.get('/', ProductController.productList);
router.get('/categories', ProductController.categoryList);

module.exports = router;