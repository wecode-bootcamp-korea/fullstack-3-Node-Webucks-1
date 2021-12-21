const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const signUp = async (email, password, username, address, phoneNumber) => {
  const encryptedPassword = bcrypt.hashSync(password, 10);
  const createUser = await prisma.$queryRaw`
  INSERT INTO users(email, password, username, address, phoneNumber) VALUES (${email}, ${encryptedPassword}, ${username}, ${address}, ${phoneNumber});
`;

  return createUser;
};

const getUserByEmail = async (email) => {
  const user = await prisma.$queryRaw`
    SELECT id, email, password FROM users WHERE email = ${email}
  `;

  return user;
};

module.exports = { signUp, getUserByEmail };
