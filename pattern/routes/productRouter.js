import express from 'express';
import { productController } from '../controllers';

const router = express.Router();

router.get('/', productController.getProduct);
router.post('/', productController.createProduct);
router.put('/', productController.updateProduct);
router.delete('/', productController.deleteProduct);

export default router;
//바꾸기
