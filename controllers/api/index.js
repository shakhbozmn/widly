const eventService = require('../../services/eventService')

// Event Controller
const eventController = {
    // Get all events
    getAll(req, res) {
        res.json(eventService.getAll())
    },
    // Create a new event
    create(req, res) {
        res.status(201).json(
            eventService.create(req, res)
        )
    },
    // Update an event
    update(req, res) {
        const event = eventService.update(req.params.id, req.body)

        if (event) {
            res.json(event)
        } else {
            res.status(404).send('Event not found')
        }
    },
    // Delete an event
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
