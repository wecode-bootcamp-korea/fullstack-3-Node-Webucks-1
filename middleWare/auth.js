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
// 제품 좋아요 인가
const like_authorization = async (req, res, next) => {
  // 하트를 누른사람만 그 하트를 삭제할수 있게 하기위한 인가
  const { id } = req.body;
  const { userId } = req;
  const likeTable = await productDao.showLike();
  for (let i = 0; i < likeTable.length; i++) {
    if (likeTable[i].drink_id === id && likeTable[i].user_id === userId) {
      return next();
    }
  }
  return res.status(400).send('좋아요버튼을 누른적이 없습니다.');
};

export { Authentication, admin_authorization, like_authorization };
//
