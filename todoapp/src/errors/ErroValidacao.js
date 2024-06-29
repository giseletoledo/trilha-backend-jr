const ErroBase = require('./ErroBase');

class ErroValidacao extends ErroBase {
  constructor(message) {
    super(message, 404);
  }
}

module.exports = ErroValidacao;
