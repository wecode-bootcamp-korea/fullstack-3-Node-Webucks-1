const http = require("http");
const express = require("express");
const { categories } = require("./api/categories");

const { getProductList } = require("./api/getProducts");
const { updateProduct } = require("./api/updateProduct");
const { deleteProduct } = require("./api/deleteProduct");
const { createProduct } = require("./api/createProduct");

const { getProductDetail } = require("./api/getProductDetail");

const { createUser } = require("./api/createUser");

const PORT = 8000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "/ home" });
});
app.get("/categories", categories);

app.get("/products", getProductList);

app.get("/product/2", getProductDetail);
app.post("/product", createProduct);
app.put("/product", updateProduct);
app.delete("/product", deleteProduct);

app.post("/user", createUser);

//서버 세팅
const server = http.createServer(app);
const start = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`server is listening on PORT ${PORT}`);
    });
  } catch {
    console.error(error);
    await prisma.$disconnect(); // 에러가 발생했을 시에 database 연결을 종료합니다.
  }
};

start();
