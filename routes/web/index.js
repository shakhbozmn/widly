const express = require('express')
const homeRouter = require('./home')

// Create a new router
const router = express.Router()

// Route for handling home-related requests
router.use('/', homeRouter)
module.exports = router
