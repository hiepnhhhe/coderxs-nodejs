const express = require('express')
const multer = require('multer')

const controller = require('../controllers/user.controller')
const router = express.Router()
const validate = require('../validates/user.validate')

const upload = multer({ dest: './public/uploads/' })

router.get('/', controller.index)

router.get('/search', controller.search)

router.get('/create', controller.post)

router.get('/:id', controller.get)

router.post('/create', upload.single('avatar'), validate.postCreate, controller.postCreate)

module.exports = router