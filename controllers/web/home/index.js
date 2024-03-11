const eventService = require('../../../services/eventService');

const homeController = {
    index: async (req, res) => {
        res.render('home/');
    },
    eventList: async (req, res) => {
        res.render('home/eventList');
    },
    add: async (req, res) => {
        res.render('home/addUpdateEvent', { mode: 'Add New Event' });
    },
    update: async (req, res) => {
        const eventData = await eventService.getById(req.params.id);
        res.render('home/addUpdateEvent', { mode: 'Update Existing Event', eventData: eventData });
    }
};

module.exports = homeController;
