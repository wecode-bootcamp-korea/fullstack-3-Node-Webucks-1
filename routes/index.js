const express = require('express')
const router = express.Router() // express 라우팅 기능을 사용하기 위해서 router 객체가 필요합니다.

const productRouter = require('./productRouter') 
const userRouter = require('./userRouter') 

router.use('/users', userRouter) // '/users' 엔드포인트를 처리하기 위해 UserRouter 를 붙여줍니다.
router.use('/products', productRouter) // '/products' 엔드포인트를 처리하기 위해 productRouter 를 붙여줍니다.

module.exports = router // 이렇게 내보낸 router 는 express app 의 미들웨어로 사용됩니다.