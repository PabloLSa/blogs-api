const { User } = require('../models');

const user = async (email, password) => {
 const userFind = await User.findOne({
    where: { email, password },
  });

  return userFind;
};

module.exports = { user };