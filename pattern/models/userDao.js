import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();
const salt = bcrypt.genSaltSync(10);

//회원가입
const signUp = async (email, password, username, address, phone_number, policy_agreed) => {
  try {
    const hash = bcrypt.hashSync(password, salt);
    const users = prisma.$queryRaw`select * from users where email=${email};`;
    await prisma.$queryRaw`
      INSERT INTO users(email, password, username,address,phone_number,policy_agreed)
      VALUES (${email}, ${hash}, ${username}, ${address},${phone_number},${policy_agreed});
    `;
    return users;
  } catch (err) {
    console.log('models error : ', err.message);
  }
};
//로그인
const signIn = async (email) => {
  try {
    const users = prisma.$queryRaw`select email, password from users where email = ${email}`;
    return users;
  } catch (err) {
    console.log(err);
  }
};
// 토큰 가지고 있니?
const isToken = async (token) => {
  try {
    const getToken = prisma.$queryRaw`select id, email from users where id = ${token}`;
    return getToken;
  } catch (err) {
    console.log(err);
  }
};
export default { signUp, signIn, isToken };
