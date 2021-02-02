const pool = require('../my-modules/pool')

const usersController = {
    getAll: (req, res) => {
      pool
      .query("SELECT * FROM users;")
      .then((data) => res.json(data.rows))
      .catch(e => res.sendStatus(500))
    },
    getUserById: (req, res) => {
      console.log(req.params)
      pool
      .query("SELECT * FROM users WHERE id=$1;", [req.params.id])
      .then((data) => res.json(data.rows))
      .catch(e => res.sendStatus(500))
    }
  };
  
  module.exports = usersController;
  