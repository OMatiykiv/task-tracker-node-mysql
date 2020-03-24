const app = require('../app')
module.exports = { getTasks, getTasksById, getTasksByStatus, createTask, updateTaskTitle, updateTaskStatus, updateTaskUser, deleteTask }

async function getTasks (req, res, next) {
  try {
    let sql =`SELECT tasks.id, tasks.title, status.status,
    users.first_name AS executor_name, users.last_name AS executor_surname
    FROM tasks
    LEFT JOIN status ON tasks.status = status.id
    LEFT JOIN users ON tasks.action_by = users.user_id`
    app.db.query(sql, (err, result) => {
      if(err) throw err
      res.json(JSON.parse(JSON.stringify(result)))
    })
  } catch (e) {
    next(e)
  }
}

async function getTasksById (req, res, next) {
  try {
    let sql = `SELECT tasks.id, tasks.title, status.status,
    users.first_name AS executor_name, users.last_name AS executor_surname
    FROM tasks
    LEFT JOIN status ON tasks.status = status.id
    LEFT JOIN users ON tasks.action_by = users.user_id ORDER BY tasks.id`
    app.db.query(sql, (err, result) => {
      if(err) throw err
      res.json(JSON.parse(JSON.stringify(result)))
    })
  } catch (e) {
    next(e)
  }
}

async function getTasksByStatus (req, res, next) {
  try {
    let sql =`SELECT tasks.id, tasks.title, status.status,
    users.first_name AS executor_name, users.last_name AS executor_surname
    FROM tasks
    LEFT JOIN status ON tasks.status = status.id
    LEFT JOIN users ON tasks.action_by = users.user_id ORDER BY status`
    app.db.query(sql, (err, result) => {
      if(err) throw err
      res.json(JSON.parse(JSON.stringify(result)))
    })
  } catch (e) {
    next(e)
  }
}

async function createTask (req, res, next) {
  try {
    let sql = `INSERT INTO tasks (title, status, action_by) VALUES ('${req.body.title}', '${req.body.status}', '${req.body.action_by}')`
    app.db.query(sql, (err) => {
      if(err) throw err
      res.json(req.body)
    })
  } catch (e) {
    next(e)
  }
}

async function updateTaskTitle (req, res, next) {
  try {
    let sql = `UPDATE tasks SET title='${req.body.title}' WHERE id = ${req.params.id}`
    app.db.query(sql, (err) => {
      if(err) throw err
      res.json('title of the task was changed')
    })
  } catch (e) {
    next(e)
  }
}

async function updateTaskStatus (req, res, next) {
  try {
    let sql = `UPDATE tasks SET status='${req.body.status}' WHERE id = ${req.params.id}`
    app.db.query(sql, (err) => {
      if(err) throw err
      res.json('status of the task was changed')
    })
  } catch (e) {
    next(e)
  }
}

async function updateTaskUser (req, res, next) {
  try {
    let sql = `UPDATE tasks SET action_by='${req.body.action_by}' WHERE id = ${req.params.id}`
    app.db.query(sql, (err) => {
      if(err) throw err
      res.json('status of the task was changed')
    })
  } catch (e) {
    next(e)
  }
}

async function deleteTask (req, res, next) {
  try {
    let sql = `DELETE FROM tasks WHERE id = ${req.params.id}`
    app.db.query(sql, (err) => {
      if(err) throw err;
    })
    res.json('this task was deleted successfully')
  } catch (e) {
    next(e)
  }
}