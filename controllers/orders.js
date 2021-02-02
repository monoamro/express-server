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
    },
    insertNewOrder: (req, res) => {
      const { price, date, userid } = req.headers;
      pool.query("INSERT INTO orders (price,date, user_id) VALUES ( $1, $2, $3);", [price, date, userid])
      .then(date => res.status(200).send(data))
      .catch(e => res.sendStatus(501))
    }
  };
  
  module.exports = ordersController;
  