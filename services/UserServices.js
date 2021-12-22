const userDao = require('../models/UserDao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signUp = async (email, password, username) => {
  const [user] = await userDao.getUserByEmail(email);

  if (user) {
    const error = new Error('ID_ALEADY_EXISTS');
    error.statusCode = 409;

    throw error;
  } else {
    const createdUser = userDao.createUser(email, password, username);

    return createdUser;
  }
};

const signIn = async (email, password) => {
  const [user] = await userDao.getUserByEmail(email);
  const same = bcrypt.compareSync(password, user.password);

  if (!user) {
    const error = new Error('INVALID_USER');
    error.statusCode = 400;

    throw error;
  }

  if (!same) {
    console.log(user.password, same);
    const error = new Error('INVALID_USER');
    error.statusCode = 400;

    throw error;
  }

  const token = jwt.sign({ id: 2 }, 'server_made_secret_key', {
    expiresIn: '1h',
  });

  return token;
};

module.exports = { signUp, signIn };
