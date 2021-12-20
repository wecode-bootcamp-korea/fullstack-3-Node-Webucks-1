const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// nullable이 아닌 email과 password, 그리고 추가사항인 username 만으로 회원가입시키기  
const userSignUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const user = await prisma.$queryRaw`
          INSERT INTO users (username,email,password) VALUES 
          (${username}, ${email}, ${password});`;
    return res.status(201).json({ message: "Sign-up completed" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { userSignUp };