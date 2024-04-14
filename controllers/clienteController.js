const Cliente = require('../model/Cliente');

module.exports.mostrar = (req, res) => {
  Cliente.find({}, (error, clientes) => {
    if (error) {
      return res.status(500).json({
        message: 'Error mostrando los clientes'
      });
    }
    if (!clientes || clientes.length === 0) {
      return res.status(404).json({
        message: 'No se encontraron clientes'
      });
    }
    console.log(clientes);
    res.status(200).json(clientes);
  });
};
