//const userService = require('../services/userService');
import { userServices } from '../services';

const signUp = async (req, res) => {
  try {
    const { email, password, username, address, phone_number, policy_agreed } = req.body;
    const requiredKey = { email, password, username, address, phone_number, policy_agreed };

    for (let key in requiredKey) {
      if (!requiredKey[key]) res.status(400).send('양식이 올바르지 않습니다.');
    }

    const users = await userServices.signUp(email, password, username, address, phone_number, policy_agreed);

    res.status(200).send(`success : 회원가입완료, email : ${users.email}`);
  } catch (err) {
    console.log('controller error : ', err);
    return res.status(400).send(err.message);
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const requiredKey = { email, password };

    for (let key in requiredKey) {
      if (!requiredKey[key]) res.status(400).send('양식이 올바르지 않습니다');
    }

    const token = await userServices.signIn(email, password);
    res.clearCookie(`user`);
    res.cookie(`user`, token);
    res.status(200).send(`success : 로그인성공, token : ${token}`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};
//
export default { signUp, signIn };
