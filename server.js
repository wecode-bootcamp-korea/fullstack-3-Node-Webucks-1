const http = require('http');
const express = require('express');
const routes = require('./routes');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.set("port", process.env.PORT || 8000);
app.use(express.json()); 
app.use(routes);

const server = http.createServer(app); 

const start = async () => {
  try {
    server.listen(app.get("port"), () => console.log(`Server is listening on ` + app.get("port")));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect(); 
  }
};

start();