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
    const users = prisma.$queryRaw`select id, email, password from users where email = ${email}`;
    return users;
  } catch (err) {
    console.log(err);
  }
};
// id값 있나?
const validId = async (Id) => {
  try {
    const getId = prisma.$queryRaw`select id from users where id = ${Id}`;
    return getId;
  } catch (err) {
    console.log(err);
  }
};
export default { signUp, signIn, validId };
