const http = require("http");
const express = require("express");
const { sendCategories } = require("./API/sendCategories");
const { sendDetail } = require("./API/sendDetail");
const { sendList, createCoffee, updateCoffee,deleteCoffee, } = require("./API/sendList");
const { productCategories } = require("./API/productCategories");
const { productDetail } = require("./API/productDetail");
const { productList } = require("./API/productList");
const { userSignUp } = require("./API/userSignUp"); 

const PORT = 4000;

const app = express();
app.use(express.json());

/* Client's HTTP REQUEST based */
// 1. GET REQUEST
app.get("/products/categories", productCategories);
app.get("/products", productDetail);
app.get("/products/2", productList);
// app.get("/products/categories", sendCategories);
// app.get("/products", sendDetail);
// app.get("/products/2", sendList);

// 2. POST REQUEST
app.post("/products/signUp", userSignUp);
// app.post("/products/create", createCoffee);
// app.post("/products/update", updateCoffee);
// app.post("/products/delete", deleteCoffee);

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