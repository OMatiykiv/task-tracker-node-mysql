const express = require('express')
const router = express.Router()
const users = require('./user.controller')

router.get('/', users.getUsers)
router.post('/', users.createUsers)
router.put('/:id', users.updateUsers)
router.delete('/:id', users.deleteUsers)

module.exports = router