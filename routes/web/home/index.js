const express = require('express');
const router = express.Router();
const homeController = require('../../../controllers/web/home');

// Home page route
router.get('/', homeController.index);
router.get('/eventList', homeController.eventList);
router.get('/add', homeController.add);
router.get('/update', homeController.update);
router.get('/update/:id', homeController.update);

module.exports = router;
