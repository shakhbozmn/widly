const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '..', 'data', 'widly_db_16395.json');

function readDbFile() {
    const data = fs.readFileSync(dbPath);
    return JSON.parse(data.toString());
}

exports.getAllEvents = (req, res) => {
    const events = readDbFile();
    res.json(events);
};

exports.getEventById = (req, res) => {
    const events = readDbFile();
    const event = events.find(e => e.id === parseInt(req.params.id));
    if (!event) return res.status(404).send('Event not found');
    res.json(event);
};

exports.createEvent = (req, res) => {
    const events = readDbFile();
    const event = { id: events.length + 1, ...req.body };
    events.push(event);
    fs.writeFileSync(dbPath, JSON.stringify(events, null, 2));
    res.status(201).json(event);
};

exports.updateEvent = (req, res) => {
    const events = readDbFile();
    const index = events.findIndex(e => e.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Event not found');

    events[index] = { ...events[index], ...req.body };
    fs.writeFileSync(dbPath, JSON.stringify(events, null, 2));
    res.json(events[index]);
};

exports.deleteEvent = (req, res) => {
    let events = readDbFile();
    const eventIndex = events.findIndex(e => e.id === parseInt(req.params.id));
    if (eventIndex === -1) return res.status(404).send('Event not found');

    events = events.filter(e => e.id !== parseInt(req.params.id));
    fs.writeFileSync(dbPath, JSON.stringify(events, null, 2));
    res.status(204).send();
};
