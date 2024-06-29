const ErroBase = require('./ErroBase');

class RequisicaoIncorreta extends ErroBase {
  constructor(message) {
    super(message, 400);
  }
}

module.exports = RequisicaoIncorreta;