const eventService = require('../../services/eventService')

const eventController = {
    getAll(req, res) {
        res.json(eventService.getAll())
    },
    create(req, res) {
        res.status(201).json(
            eventService.create(req, res)
        )
    },
    update(req, res) {
        const event = eventService.update(req.params.id, req.body)

        if (event) {
            res.json(event)
        } else {
            res.status(404).send('Event not found')
        }
    },
    delete(req, res) {
        const event = eventService.getById(req.params.id)

        if (event) {
            eventService.delete(req.params.id)
            res.status(204).send('Event deleted successfully')
        } else {
            res.status(404).send('Event not found')
        }
    }
}

module.exports = eventController
