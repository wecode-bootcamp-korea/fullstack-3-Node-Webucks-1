const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const signup = async (req, res) => {
    try {
      const { email, userName, password } = req.body;

      console.log('email: ', email, 'userName: ', userName);

      const createUser = await prisma.$queryRaw`
        INSERT INTO users(email, userName) VALUES (${email}, ${userName});
      `;
  
      return res.status(201).json({ message: 'CREATED' });
    } catch (err) {
      console.log(err);
  
      return res.status(500).json({ message: err.message });
    }
};

module.exports = { signup };