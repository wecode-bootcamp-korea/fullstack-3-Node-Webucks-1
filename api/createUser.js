const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    console.log(`email: ${email} , username: ${username}`);

    const createdUser = await prisma.$queryRaw`
        INSERT INTO 
            users(email, password, username) 
        VALUES 
            (${email}, ${password}, ${username});
      `;

    return res.status(201).json({ message: "CREATED" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { createUser };
