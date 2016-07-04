/***************************************************
 * BED SCHEMA
 **************************************************/

var mongoose = require('mongoose'),
  async = require('async'),
  mongoose = require('mongoose');

const Bed = mongoose.Schema({
  patientName: String,
  number: Number,
  age: Number,
  condition: String,
});

module.exports = mongoose.model('Bed', Bed);
