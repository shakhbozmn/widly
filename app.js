const express = require('express');
const bodyParser = require('body-parser');
const eventsRouter = require('./routes/events');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Event routes
app.use('/api/events', eventsRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
