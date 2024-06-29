const ErroBase = require('./ErroBase');

class NaoEncontrado extends ErroBase {
  constructor(message) {
    super(message, 404);
  }
}

module.exports = NaoEncontrado;
