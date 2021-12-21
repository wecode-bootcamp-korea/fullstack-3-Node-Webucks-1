const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const login = async (req, res) => {
  try {
    const { email, password, username, address, phone_number, policy_agreed } = req.body;

    await prisma.$queryRaw`
      INSERT INTO users(email, password, username,address,phone_number,policy_agreed) VALUES (${email}, ${password}, ${username}, ${address},${phone_number},${policy_agreed});
    `;

    const users = prisma.$queryRaw`select * from users;`;

    res.status(201).send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default login
