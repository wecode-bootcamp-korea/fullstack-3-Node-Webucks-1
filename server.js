const http = require("http");
const express = require("express");
const { categories } = require("./categories");
const { getProductList  } = require("./getProducts");
const { getProductDetail } = require("./getProductDetail");
const {updateProduct} = require("./updateProduct");
const {deleteProduct} = require("./deleteProduct");
const {createProduct} = require("./createProduct");

const PORT = 8000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "/ home" });
});
app.get("/products/categories", categories);

app.get("/products", getProductList);
app.post("/products", createProduct);
app.put("/products", updateProduct);
app.delete("/products", deleteProduct);

app.get("/products/detail", getProductDetail);

//서버 세팅
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT}`);
});
