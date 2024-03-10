const express = require('express')
const homeRouter = require('./home')

const router = express.Router()

// registering child routers
router.use('/', homeRouter)
module.exports = router
