const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const productDetail = async (req, res) => {
  try {
    const detail = await prisma.$queryRaw`
          SELECT * FROM products`;
    return res.json({ detail });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { productDetail };