const userService = require("../services/userService");

const userSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userInfo = { email, password };
   
    for (let key in userInfo) {
        if (!userInfo[key]) {
            return res.status(400).json({message: `KEY_ERROR: ${key}`});
        }
    }

    const user = await userService.userSignIn(email, password); 

    return res.status(200).json({message: 'SIGNIN_SUCCESS', token: user}); 
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({message: err.message});
  }
}

// 아래 정의된 함수는 지난 수업시간에 다룬 내용 입니다
const userSignUp = async (req, res) => {
    try {
      const { email, password, username } = req.body
      const userInfo = { email, password, username };
 
      for (let key in userInfo) {
        if (!userInfo[key]) {
            return res.status(400).json({message: `KEY_ERROR: ${key}`});
        }
      }

      const user = await userService.userSignUp(email, password, username); 

      return res.status(201).json({message: 'SIGNUP_SUCCESS'})
    } catch (err) {
      console.log(err);
      return res.status(err.statusCode || 500).json({message: err.message});
    }
  }

  module.exports = { userSignIn, userSignUp }