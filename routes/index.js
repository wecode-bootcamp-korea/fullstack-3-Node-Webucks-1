const express = require("express");
const router = express.Router();

const UserRouter = require("./userRouter");
const ProductRouter = require("./productRouter");

router.use("/users", UserRouter);
router.use("/products", ProductRouter);

module.exports = router;
