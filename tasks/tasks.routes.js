const express = require('express')
const router = express.Router()
const tasks = require('./tasks.controller')

router.get('/', tasks.getTasks)
router.get('/id', tasks.getTasksById)
router.get('/status', tasks.getTasksByStatus)
router.post('/', tasks.createTask)
router.put('/title/:id', tasks.updateTaskTitle)
router.put('/status/:id', tasks.updateTaskStatus)
router.put('/user/:id', tasks.updateTaskUser)
router.delete('/:id', tasks.deleteTask)

module.exports = router