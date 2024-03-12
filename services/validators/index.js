const { body, param } = require('express-validator');
const eventService = require('../eventService')

// Validation middleware for adding an event
const addEventValidation = () => {
  return [
    // Validate event name
    body('eventName')
      .notEmpty().withMessage('Event name must not be empty')
      .isLength({ min: 5, max: 255 }).withMessage('Event name must be between 8 and 255 characters long'),

    // Validate event date and time
    body('eventDateTime')
      .notEmpty().withMessage('Event date time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
      .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),

    // Validate event venue
    body('venue')
      .notEmpty().withMessage('Event venue must not be empty'),

    // Validate contact phone number
    body('contactPhone')
      .notEmpty().withMessage('Contact phone must not be empty')
      .matches(/^\+998\d{9}$/).withMessage('Invalid phone number format, it must be +998xxxxxxxxx'),

    // Validate seat information
    body('seat')
      .notEmpty().withMessage('Seat must not be empty'),
  ];
};

// Validation middleware for deleting an event
const deleteEventValidation = () => {
  return [
    // Custom validation to check if event exists
    param('id').custom(async (id) => {
      const exists = await eventService.getById(id);
      if (!exists) {
        throw new Error('Event not found');
      }
    })
  ];
};

// Validation middleware for updating an event
const updateEventValidation = () => {
  return [
    // Custom validation to check if event exists
    param('id').custom(async (id) => {
      const exists = await eventService.getById(id);
      if (!exists) {
        throw new Error('Event not found');
      }
    }),

    // Validate event name
    body('eventName')
      .notEmpty().withMessage('Event name must not be empty')
      .isLength({ min: 8, max: 255 }).withMessage('Event name must be between 8 and 255 characters long'),

    // Validate event date and time
    body('eventDateTime')
      .notEmpty().withMessage('Event date time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
      .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),

    // Validate event venue
    body('venue')
      .notEmpty().withMessage('Event venue must not be empty'),

    // Validate contact phone number
    body('contactPhone')
      .notEmpty().withMessage('Contact phone must not be empty')
      .matches(/^\+998\d{9}$/).withMessage('Invalid phone number format, it must be +998xxxxxxxxx'),

    // Validate seat information
    body('seat')
      .notEmpty().withMessage('Seat must not be empty'),
  ];
};

module.exports = {
  addEventValidation,
  updateEventValidation,
  deleteEventValidation
};
