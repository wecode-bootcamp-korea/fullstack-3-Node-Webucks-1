import { verifyToken } from './token';
import { productDao } from '../pattern/models';
require('dotenv').config();
//인증
const Authentication = (req, res, next) => {
  const token = req.cookies.user; // token가져오기

  const vaildToken = verifyToken(token);

  if (vaildToken) {
    req.userId = vaildToken.id;
    next();
  } else {
    res.status(400).send('토큰이 유효하지 않습니다.');
    return;
  }
};
// 제품 인가
const admin_authorization = async (req, res, next) => {
  if (req.userId === 1) {
    next();
  } else {
    res.status(400).send('관리자가 아닙니다');
  }
};

export { Authentication, admin_authorization };
