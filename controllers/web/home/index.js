const eventService = require('../../../services/eventService');

const homeController = {
    index: async (req, res) => {
        res.render('home/body');
    },
    add: async (req, res) => {
        res.render('home/addUpdateEvent', { mode: 'Add' });
    },
    update: async (req, res) => {
        const eventData = await eventService.getById(req.params.id);
        res.render('home/addUpdateEvent', { mode: 'Update', eventData: eventData });
    }
};

module.exports = homeController;
