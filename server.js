const http = require("http");
const express = require("express");
const { categories } = require("./sendCategories");
const { getProducts, createProduct, updateProduct, deleteProduct  } = require("./sendProducts");
const { getProductDetail } = require("./sendProductDetail");

const PORT = 8000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "/ home" });
});
app.get("/products/categories", categories);

app.get("/products", getProducts);
app.post("/products", createProduct);
app.put("/products", updateProduct);
app.delete("/products", deleteProduct);

app.get("/products/detail", getProductDetail);

//서버 세팅
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT}`);
});
