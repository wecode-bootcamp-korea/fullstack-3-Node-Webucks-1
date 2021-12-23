const UserDao = require('../models/UserDao');
const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
  try {
    const { token } = req.body;
    const { SERVER_MADE_SECRET_KEY } = process.env;
    const { id } = jwt.verify(token, SERVER_MADE_SECRET_KEY); // 암호화된 토큰 복호화

    const findUser = await UserDao.getUserById(id);
    req.findUser = findUser;
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { validateToken };
