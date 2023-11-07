const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  authMiddleware: function (context) {
    // allows token to be sent via context.headers.authorization
    const token = context.headers.authorization;

    if (!token) {
      throw new Error("Authentication token is missing.");
    }

    try {
      const decoded = jwt.verify(token, secret, { maxAge: expiration });
      return decoded;
    } catch (error) {
      throw new Error("Invalid token.");
    }
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign(payload, secret, { expiresIn: expiration });
  },
};
