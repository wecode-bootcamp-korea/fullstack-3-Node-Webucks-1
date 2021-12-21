const UserService = require('../services/userService');

const signUp = async (req, res) => {
  try {
    const { email, password, username, address, phoneNumber } = req.body;
    const REQUIRED_KEYS = { email, password };

    const createUser = await UserService.signUp(email, password, username, address, phoneNumber);

    return res.status(201).json({ message: 'CREATED_SUCCESS' });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const REQUIRED_KEYS = { email, password };

    for (let key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        return res.status(400).json({ message: `KEY_ERROR: ${info}` });
      }
    }

    const token = await UserService.signIn(email, password);

    return res.status(201).json({ message: 'LOGIN_SUCCESS', token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { signUp, signIn };