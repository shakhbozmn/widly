const express = require('express')
const path = require('path')
const dbPath = path.join(__dirname, '/data/widly_db_16395.json');
global.widly_db = dbPath

const webRoute = require('./routes/web');
const apiRoute = require('./routes/api');

const app = express();

app.set('view engine', 'pug');

app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoute);
app.use('/', webRoute);

app.use((req, res) => {
    res.redirect('/');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));