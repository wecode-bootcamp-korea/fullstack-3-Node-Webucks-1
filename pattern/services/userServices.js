import { userDao } from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const signUp = async (email, password, username, address, phone_number, policy_agreed) => {
  const [is_mail] = await userDao.signIn(email);
  if (is_mail) throw new Error('중복된 id 값입니다');
  const [user] = await userDao.signUp(email, password, username, address, phone_number, policy_agreed);
  return user;
};

const signIn = async (email, password) => {
  const [users] = await userDao.signIn(email);
  if (!users) throw new Error('id , pw가 맞지 않습니다.');
  if (!bcrypt.compareSync(password, users.password)) throw new Error('id , pw가 맞지 않습니다.');
  console.log(users.id);
  let token = jwt.sign(
    {
      id: users.id,
    },
    'abcd',
    {
      expiresIn: '60m', // 유효 시간은 60분
    }
  );

  return token;
};

export default { signUp, signIn };
