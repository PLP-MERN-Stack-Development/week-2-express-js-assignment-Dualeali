const authenticate = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth === 'Bearer secret123') {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authenticate;
