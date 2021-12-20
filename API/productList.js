const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const productList = async (req, res) => {
  try {
    const list = await prisma.$queryRaw`
          SELECT * FROM products`;
    return res.json({ list });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { productList };