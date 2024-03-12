const express = require('express')
const eventRouter = require('./event')

// Create a new router
const router = express.Router()

// Route for handling event-related requests
router.use('/event', eventRouter)
module.exports = router
