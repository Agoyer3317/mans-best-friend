const express = require('express');
const Knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('../../knexfile');

const routes = require('./routes');
const app = express();

// Connect to database
const knex = Knex(knexConfig.development);

// Migrate to latest
knex.migrate.latest();

// Tell Objection where to look for model files
Model.knex(knex);

// const db = require("./models");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
}

// Add routes, both API and view
app.use(routes);

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
