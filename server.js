const http = require("http");
const express = require("express");
const routes = require("./routes");
const { sendCategories } = require("./API/sendCategories");
const { sendDetail } = require("./API/sendDetail");
const { sendList, createCoffee, updateCoffee,deleteCoffee, } = require("./API/sendList");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const PORT = 4000;

const app = express();
app.use(express.json());
app.use(routes);

/* Client's HTTP REQUEST based */
// 1. GET REQUEST
// Mission 1
app.get("/coffees/categories", sendCategories);
app.get("/coffees/detail", sendDetail);
app.get("/coffees", sendList);

// 2. POST REQUEST
// Mission 1
app.post("/coffees/create", createCoffee);
app.post("/coffees/update", updateCoffee);
app.post("/coffees/delete", deleteCoffee);

// Create a server
const server = http.createServer(app);

// Run my server
const serverStart = async() => {
  try {
    server.listen(PORT, () => { console.log(`server is listening on PORT ${PORT}`); });
  } catch (err) {
      console.log(err);
      await prisma.$disconnect();
  }
};

serverStart();