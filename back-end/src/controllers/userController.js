const userService = require('../services/userService');
const rescue = require('express-rescue');

const registerController = rescue(async (req, res) => {
  const { body } = req;
  const newUser = await userService.createUser(body);
  return res.status(newUser.status).json(newUser.message);
});

module.exports = { 
  registerController,
};
