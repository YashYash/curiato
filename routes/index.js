var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bed = mongoose.model('Bed');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CURIATO' });
});


router.get('/dashboard', function(req, res, next) {
	console.log("### SHOWING THE DASHBOARD");
	Bed.find().exec(function(error, beds) {
		res.render('dashboard', {beds: beds});
	});	
});

// Create a bed
router.get('/api/createBed', function(req, res, next) {
	var bed = {
	  patientName: "SOme shit",
	  number: 24,
	  age: 21,
	  condition: 'dead',		
	};
	var newBed = new Bed(bed);
	newBed.save(function(newlyCreatedBed) {
		console.log(newlyCreatedBed);
		res.send({
			data: newlyCreatedBed,
		})
	});
});

// Get the beds
router.get('/api/getBeds', function(req, res, next) {
	Bed.find({
		patientName: 'Lum'
	}).exec(function(error, beds) {
		res.send({
			data: beds
		})
	})
});


module.exports = router;
