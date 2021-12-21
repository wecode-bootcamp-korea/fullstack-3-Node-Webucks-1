import express from 'express';
import { PrismaClient } from '@prisma/client';
import routes from './pattern/routes';

const prisma = new PrismaClient();
const PORT = 8060;
const app = express();

app.use(express.json()); //미들
app.use(routes);

// app.get('/', (req, res) => {
//   res.send('asd');
// });
// // 카테고리 값
// app.get('/products/categories', categories);
// // 디테일 값
// app.get('/detail', detail);
// // 현재 db tabled값 보여주기
// app.get('/products', products);
// // 사용자가 값을 쓰면 추가된 값 보여주기
// app.post('/products', createProduct);
// // 사용자가 원래있던 데이터를 변경하기
// app.put('/products', updateProduct);
// // 데이터 삭제하기
// app.delete('/products', deleteProduct);
// // 유저 가입시키기
// app.post('/users/signup', login);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
  }
};

start();
