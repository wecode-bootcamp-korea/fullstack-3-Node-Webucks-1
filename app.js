const http = require('http');
const express = require('express');
const { categoreis } = require('./categories');
const { list } = require('./list');
const { createList } = require('./createList');
const { updateList } = require('./updateList');
const { deleteList } = require('./deleteList');
const { detail } = require('./detail');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: '/ endpoint' });
});

app.get('/products/categories', categoreis);
app.get('/products', list);
app.post('/products', createList);
app.put('/products', updateList);
app.delete('/products', deleteList);
app.get('/products/2', detail);

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('server is listening on PORT 8080');
});
