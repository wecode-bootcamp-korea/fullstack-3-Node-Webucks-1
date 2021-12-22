const prisma = require('./index');

const getUserByEmail = async (email) => {
    const user = await prisma.$queryRaw`
      SELECT id,email,password FROM users WHERE email=${email}`;

    return user;
}

const userSignUp = async (email, password, username) => {
    const user = await prisma.$queryRaw`
      INSERT INTO users (email,password,username) VALUES (${email},${password},${username});`;

    return user;
}

module.exports = { getUserByEmail, userSignUp}
 