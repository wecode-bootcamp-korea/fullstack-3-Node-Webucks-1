import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//회원가입
const signUp = async (email, hash, username, address, phone_number, policy_agreed) => {
  await prisma.$queryRaw`
      INSERT INTO users(email, password, username,address,phone_number,policy_agreed)
      VALUES (${email}, ${hash}, ${username}, ${address},${phone_number},${policy_agreed});
    `;
  const users = await prisma.$queryRaw`select email from users where email=${email};`;
  return users;
};
//로그인
const signIn = async (email) => {
  const users = await prisma.$queryRaw`select id, email, password from users where email = ${email}`;
  return users;
};
// id값 있나?
const validId = async (Id) => {
  const getId = await prisma.$queryRaw`select id from users where id = ${Id}`;
  return getId;
};
export default { signUp, signIn, validId };
