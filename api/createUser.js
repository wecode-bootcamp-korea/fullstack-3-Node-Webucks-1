const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(`email: ${email}`);

    const createdUser = await prisma.$queryRaw`
        INSERT INTO 
            users(email, password) 
        VALUES 
            (${email}, ${password});
      `;

    return res.status(201).json({ message: "CREATED" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { createUser };
