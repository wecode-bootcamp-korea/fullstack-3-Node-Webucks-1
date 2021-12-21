const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  try {
    const getAllUsers = await prisma.$queryRaw`
        SELECT
            *
        FROM
            users
    `;
    return res.status(200).json({ data: getAllUsers });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {getUsers}