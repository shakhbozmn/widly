const express = require('express');
const { validationResult } = require('express-validator');
const { addEventValidation, updateEventValidation, deleteEventValidation } = require('../../../services/validators/index');

const router = express.Router();
const eventController = require('../../../controllers/api');

// Define API routes
router.get('/', (req, res) => {
  eventController.getAll(req, res);
});

router.post('/', addEventValidation(), (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  eventController.create(req, res)
})

router.put('/:id', updateEventValidation(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  eventController.update(req, res)
})

router.delete('/:id', deleteEventValidation(), (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  eventController.delete(req, res)
})

module.exports = router;
