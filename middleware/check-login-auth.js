const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // 1. Get token from the 'Authorization' header
    const token = req.headers.authorization.split(' ')[1];

    // 2. Verify the token using your secret key
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Add the decoded token's data to the request object
    req.userData = { 
      userId: decodedToken.userId, 
      role: decodedToken.role 
    };

    // 4. If successful, call 'next()' to proceed
    next();

  } catch (error) {
    res.status(401).json({ message: 'Authentication failed!' });
  }
};