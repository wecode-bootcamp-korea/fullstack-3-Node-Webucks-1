const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
  const { status, message } = err;
  console.log(err);
  res.status(status || 500).json({ message });
});

module.exports = app;
