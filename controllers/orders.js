const pool = require('../my-modules/pool')

const ordersController = {
    getAll: (req, res) => {
      pool
      .query("SELECT * FROM orders;")
      .then((data) => res.json(data.rows))
      .catch(e => res.sendStatus(500))
    },
    getOrderById: (req, res) => {
      pool
      .query("SELECT * FROM orders WHERE id=$1;", [req.params.id])
      .then((data) => res.json(data.rows))
      .catch(e => res.sendStatus(500))
    }
  };
  
  module.exports = ordersController;
  