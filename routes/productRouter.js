const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController') 

// Route 는 오직 Controller 에만 의존
// '/products' 핸들링 하는 컨트롤러 함수
router.get('/categories', productController.getCategories) 
router.get('/detail', productController.getDetail)
router.get('/', productController.getList)

module.exports = router // 이렇게 내보내면 부모 router 에 자동으로 연결됩니다.