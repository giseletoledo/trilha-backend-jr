const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const ErroValidacao = require('../errors/ErroValidacao');

dotenv.config();

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(new ErroValidacao('Token não fornecido'));
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    next(new ErroValidacao(`Token inválido ${error}`));
  }
}

module.exports = authMiddleware;
