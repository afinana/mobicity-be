/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var EventsDB = require('../api/model/event.model');


// Insert seed data below
var eventSeed = require('../data/events.seed.json');

// Insert seed inserts below
EventsDB.find({}).remove(function() {
  EventsDB.create(eventSeed);
});