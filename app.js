const express = require('express');
const bodyParser = require('body-parser')
const logger = require('morgan')
const mysql = require('mysql');
const api = require('./routes')
const app = express();
const port = process.env.PORT || 3000;
let firstInit = '';


const dbInit = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456"
});

dbInit.connect(err => {
  if(err) throw err;
})

dbInit.query("SHOW DATABASES LIKE 'tracker'", (err, result) => {
  if(!result[0]) {
    let sql = 'CREATE DATABASE tracker';
    dbInit.query(sql, (err,result) => {
      if(err) throw err;
      firstInit = true;
    })
  }
  dbInit.end()
})

setTimeout(()=>{
  let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database : 'tracker'
  });

  db.connect(err => {
    if(err) throw err;
    console.log('Connected')
  })

  if(firstInit) {
    let statusTable = 'CREATE TABLE status(id int AUTO_INCREMENT, status VARCHAR(255), PRIMARY KEY(id))';
    db.query(statusTable, (err) => {
        if(err) throw err;
    });

    let usersTable = 'CREATE TABLE users(user_id int AUTO_INCREMENT, first_name VARCHAR(255), last_name VARCHAR(255), PRIMARY KEY(user_id))';
    db.query(usersTable, (err) => {
        if(err) throw err;
    });

    let tasksTable = 'CREATE TABLE tasks(id int AUTO_INCREMENT, title VARCHAR(255), status int NOT NULL, action_by int, PRIMARY KEY(id))';
    db.query(tasksTable, (err) => {
        if(err) throw err;
    });

    let status = "INSERT INTO status (status) VALUES ?"
    let statusName = [
      ['View'],
      ['In Progress'],
      ['Done']
    ]
    db.query(status, [statusName], err => {
      if(err) throw err;
    });
  }
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use('/api', api)
  app.use((err, req, res, next) => {
    if(err.status) {
      res.status(err.status).send(err.message)
    } else {
      res.status(500).send(err)
    }
  })

  app.listen(port, () => {
    console.log('Server is up and running on port number ' + port)
  })

  exports.db = db
}, 1000)