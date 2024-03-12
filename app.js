const express = require('express')
const path = require('path')
const dbPath = path.join(__dirname, '/data/widly_db_16395.json');
global.widly_db = dbPath

const webRoute = require('./routes/web');
const apiRoute = require('./routes/api');

const app = express();

// Set a view engine for the app
app.set('view engine', 'pug');


// Set the public folder as a static folder
app.use('/css', express.static('public/css'))
app.use('/images', express.static('public/images'))
app.use('/js', express.static('public/js'))

// Set the body parser for the app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the routes for the app
app.use('/api', apiRoute);
app.use('/', webRoute);

// Set a 404 page and redirect to homepage
app.use((req, res) => {
    res.redirect('/');
});

// Set the port for the app
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));