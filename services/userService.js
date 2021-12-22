const userDao = require("../models/userDao");
const bcrypt = require('bcrypt');

// READ a user info in the database and return a token
const userSignIn = async (email, password) => {
    // [1] 데이터베이스에서 유저 있는지 확인
    const [user] = await userDao.getUserByEmail(email);
    // [2] 유저가 없거나, 있어도 비밀번호 정보가 불일치하면 에러
    const hashedPassword = await bcrypt.hash(password, 10);
    const isCorrectPassword = await bcrypt.compare(password, hashedPassword);
    if ((!user) || (!isCorrectPassword)) {
      const error = new Error ('INVALID_USER');
      error.statusCode = 400;
      throw error;
    }
    // [3] 맞으면 성공(토큰주기)
    const token = await getToken(user.id); 
  
    return token;
}

// CREATE a user in the database
const userSignUp = async (email, password, username) => {
  const [foundUser] = await userDao.getUserByEmail(email);
  const isUserFound = (foundUser !== undefined) ? true : false;
  // [1] 데이터베이스에서 user가 발견된다면 에러 
  if (isUserFound) {
      const error = new Error ('USER_DUPLICATED');
      error.statusCode = 400;
      throw error;
  }
  // [2] 패스워드 길이가 8 미만이라면 에러 
  if (password.length < 8) {
    const error = new Error ('INVALID_PASSWORD');
    error.statusCode = 400;
    throw error;
} 
  // [3] 유효한 비밀번호를 해쉬처리하여 복호화 후 데이터베이스에 유저 정보 저장 
  const hashedPassword = await bcrypt.hash(password, 10);
  const createdUser = await userDao.userSignUp(email, hashedPassword, username);

  return createdUser; 
}

const getToken = async (userId) => {
   return userId*8888;
}

module.exports = { userSignIn, userSignUp};