const http = require('http');
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { categories } = require('./categories');
const { list } = require('./list');
const { detail } = require('./detail');
const { createProduct } = require('./createProduct');
const { updateProduct } = require('./updateProduct');
const { deleteProduct } = require('./deleteProduct');
const { signup } = require('./signup');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 8000);

app.get('/', (req, res) => {
  res.json({ message: '/ endpoint' });
});

app.get('/products/categories', categories);
app.get('/products', list);
app.get('/products/2', detail);

app.post('/products', createProduct);
app.put('/products', updateProduct);
app.delete('/products', deleteProduct);

app.post('/users/signup', signup);

const server = http.createServer(app);

const start = async () => {
  try {
    server.listen(app.get("port"), () => console.log("Server is listening on " + app.get("port")));
  } catch (err) {
    console.log(err);
    await prisma.$disconnect();
  }
};

start();