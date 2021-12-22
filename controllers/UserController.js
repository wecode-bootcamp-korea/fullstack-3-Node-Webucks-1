const UserServices = require('../services/UserServices');

const signUp = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const REQUIRED_KEYS = { email, password };

    console.log('email: ', email);

    await UserServices.signUp(email, password, username);

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

    console.log(email, password);

    const token = await UserServices.signIn(email, password);

    return res.status(201).json({ message: 'LOGIN_SUCCESS', token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { signUp, signIn };
