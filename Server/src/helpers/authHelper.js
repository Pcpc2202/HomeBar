const jwt = require("jsonwebtoken");

const generateToken = ({ id, role }) => {
  if (!id || !role) throw new Error("INVALID_TOKEN_PAYLOAD");

  return jwt.sign({ id, role }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: "3610000",
  });
};

const decodeToken = (token) => jwt.verify(token, process.env.JWT_PRIVATE_KEY);

module.exports = {
  generateToken,
  decodeToken,
};
