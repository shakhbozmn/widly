const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users/index'));

// Listen on port 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
