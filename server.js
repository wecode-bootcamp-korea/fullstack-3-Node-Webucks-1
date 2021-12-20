const http = require('http');
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get('/categories', async (req, res) => {
  try {
    const getCategories = await prisma.$queryRaw`
      SELECT * FROM categories;
    `;

    return res.status(200).json(getCategories);
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
});

app.get('/products', async (req, res) => {
  try {
    const getProducts = await prisma.$queryRaw`
      SELECT * FROM products;
    `;

    return res.status(200).json(getProducts);
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
});

app.post('/users/signup', async (req, res) => {
  try {
    const { email, name, password } = req.body;

    console.log('email: ', email, 'name: ', name);

    const createUser = await prisma.$queryRaw`
      INSERT INTO users(email, userName) VALUES (${email}, ${name});
    `;

    return res.status(201).json({ message: 'CREATED' });
  } catch (err) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
});

const server = http.createServer(app);

const start = async () => {
  try {
    server.listen(8000, () => console.log(`Server is listening on 8000`));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
  }
};

start();
