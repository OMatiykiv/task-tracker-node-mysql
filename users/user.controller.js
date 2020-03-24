const app = require('../app')
module.exports = { getUsers, createUsers, updateUsers, deleteUsers }

async function getUsers (req, res, next) {
  try {
    let sql = 'SELECT * FROM users'
    app.db.query(sql, (err, result) => {
      if(err) throw err
      res.json(JSON.parse(JSON.stringify(result)))
    })
  } catch (e) {
    next(e)
  }
}

async function createUsers (req, res, next) {
  try {
    let sql = `INSERT INTO users (first_name, last_name) VALUES ('${req.body.first_name}', '${req.body.last_name}')`
    app.db.query(sql, (err) => {
      if(err) throw err;
      res.json(req.body)
    })
  } catch (e) {
    next(e)
  }
}

async function updateUsers (req, res, next) {
  try {
    let sql = `UPDATE users SET first_name='${req.body.first_name}', last_name='${req.body.last_name}' WHERE user_id = ${req.params.id}`
    app.db.query(sql, (err) => {
      if(err) throw err
      res.json(req.body)
    })
  } catch (e) {
    next(e)
  }
}

async function deleteUsers (req, res, next) {
  try {
    let sql = `DELETE FROM users WHERE user_id = ${req.params.id}`
    app.db.query(sql, (err) => {
      if(err) throw err;
      res.json('this user was deleted successfully')
    })
  } catch (e) {
    next(e)
  }
}