const jwt = require('jsonwebtoken');

const verifyToken = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    return { valid: true, expired: false, decoded };
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return { valid: false, expired: true, message: 'Token expired' };
    }
    return { valid: false, expired: false, message: 'Invalid token' };
  }
};

module.exports = verifyToken;