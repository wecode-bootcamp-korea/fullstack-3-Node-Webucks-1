const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const productCategories = async (req, res) => {
    try {
      const categories = await prisma.$queryRaw`
            SELECT * FROM categories`;
      return res.json({ categories });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  };
  
  module.exports = { productCategories };