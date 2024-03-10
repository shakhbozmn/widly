const express = require('express')
const eventRouter = require('./event')

const router = express.Router()

// registering child routers
router.use('/event', eventRouter)
module.exports = router
