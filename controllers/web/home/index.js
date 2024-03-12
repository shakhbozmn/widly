// Accessing the eventService 
const eventService = require('../../../services/eventService');

// Home Controller
const homeController = {
    // Home page
    index: async (req, res) => {
        res.render('home/');
    },
    // Event List Page
    eventList: async (req, res) => {
        res.render('home/eventList');
    },
    // Add new event page 
    add: async (req, res) => {
        res.render('home/addUpdateEvent', { mode: 'Add New Event' });
    },
    //Update an event 
    update: async (req, res) => {
        const eventData = await eventService.getById(req.params.id);
        res.render('home/addUpdateEvent', { mode: 'Update Existing Event', eventData: eventData });
    }
};

module.exports = homeController;
