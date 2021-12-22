const PORT = 8080;
const http = require('http');
const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(routes);

const server = http.createServer(app);

const start = () => {
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
