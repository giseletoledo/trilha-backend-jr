function manipuladorErros(err, req, res, next) {
    res.status(err.status || 500).json({ error: err.message || 'Erro interno' });
  }
  
  module.exports = manipuladorErros;
  