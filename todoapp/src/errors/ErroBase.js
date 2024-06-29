class ErroBase extends Error {
    constructor(message = 'Erro interno', status = 500) {
      super();
      this.message = message;
      this.status = status;
    }
  }
  
module.exports = ErroBase;
  