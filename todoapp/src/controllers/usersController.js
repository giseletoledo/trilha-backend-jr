const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { User } = require('../models/User');
const ErroValidacao = require('../errors/ErroValidacao');

dotenv.config();

class UsersController {
  static async signup(req, res, next) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        throw new ErroValidacao('Informe todos os campos corretamente');
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, email, password: hashedPassword });
      res.status(201).json({ message: `Cadastro realizado com sucesso ${newUser.name}` });
    } catch (error) {
      next(error);
    }
  }

  static async signin(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new ErroValidacao('Informe todos os campos corretamente');
      }
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new ErroValidacao('Usuário não encontrado');
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new ErroValidacao('Senha incorreta');
      }
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UsersController;
