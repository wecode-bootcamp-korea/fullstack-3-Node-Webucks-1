const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const createUser = async (email, password, username) => {
  const encryptedPassword = bcrypt.hashSync(password, 10);
  const createUser = await prisma.$queryRaw`
    INSERT INTO users (email, password, username)
    VALUES (${email}, ${encryptedPassword}, ${username});
`;

  return createUser;
};

const getUserByEmail = async (email) => {
  const user = await prisma.$queryRaw`
    SELECT id, email, password FROM users WHERE email = ${email}
  `;

  return user;
};

const getUserById = async (id) => {
  const user = await prisma.$queryRaw`
    SELECT id FROM users WHERE id=${id}
  `;

  return user;
};

module.exports = { createUser, getUserByEmail, getUserById };
