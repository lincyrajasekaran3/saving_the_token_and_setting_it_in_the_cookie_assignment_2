const encrypt = require('./script');
const verifyToken = require('./verify');

const secret = 'kalviSecret';
const payload = { id: 1, name: 'Kalvian' };

// Generate token
const token = encrypt(payload, secret);
console.log("Generated Token:", token);

// Wait for 70 seconds to test expiry
setTimeout(() => {
  const result = verifyToken(token, secret);
  console.log("Verification Result:", result);
}, 70000); // 70 seconds later