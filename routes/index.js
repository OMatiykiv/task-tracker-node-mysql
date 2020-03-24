const express = require('express')
const router = express.Router()
const tasksRoutes = require('../tasks/tasks.routes')
const usersRoutes = require('../users/users.routes')

router.use('/tasks', tasksRoutes)
router.use('/users', usersRoutes)

module.exports = router