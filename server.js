const http = require("http");
const express = require("express");
const { categories } = require("./api/categories");

const { getProductList } = require("./api/getProducts");
const { updateProduct } = require("./api/updateProduct");
const { deleteProduct } = require("./api/deleteProduct");
const { createProduct } = require("./api/createProduct");

const { getProductDetail } = require("./api/getProductDetail");

const PORT = 8000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "/ home" });
});
app.get("/categories", categories);

app.get("/products", getProductList);

app.get("/product", getProductDetail);
app.post("/product", createProduct);
app.put("/product", updateProduct);
app.delete("/product", deleteProduct);

//서버 세팅
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT}`);
});
