import express from 'express';
import { productController } from '../controllers';
import { Authentication, like_authorization } from '../../middleWare/auth';

const router = express.Router();

router.get('/', Authentication, productController.getProduct);
router.post('/', Authentication, productController.createProduct);
router.put('/', Authentication, productController.updateProduct);
router.delete('/', Authentication, productController.deleteProduct);

router.put('/list', productController.likeProduct);
router.delete('/list', like_authorization, productController.likeDeleteProduct);

export default router;

// 맨처음 한번 보여준다.

// 누군가 좋아요눌려져 있는것을 다시 누르면 ->  삭제

// 누군가 좋아요를 처음 누른다. -> 생성
