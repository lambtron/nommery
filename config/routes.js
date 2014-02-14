'use strict';

// var moment = require('./moment');

(function() {

var yelp = require('../app/controllers/yelp');
var moment = require('moment');

var events = [
		{
			title: 'Dinner at State Bird Provisions',
			region: 'San Francisco',
			neighborhood: 'Western Addition',
			datetime: moment("2014-2-20 22:00").format('dddd, MMMM Do, h:mma'),
			partyMax: 6,
			attendees: [
				{
					name: 'Andy J.',
					imgUrl: '/public/img/prof2.jpg'
				},
				{
					name: 'Steven L.',
					imgUrl: '/public/img/prof3.jpg'
				},
				{
					name: 'Carrie S.',
					imgUrl: '/public/img/prof1.jpg'
				},
				{
					name: 'Shelley Y.',
					imgUrl: '/public/img/prof5.jpg'
				},
				{
					name: 'Alex D.',
					imgUrl: '/public/img/prof6.jpg'
				}
			],
			pictures: [
				{
					imgUrl: '/public/img/statebirdprovisions1.jpg',
					altTxt: 'statebirdprovisions1'
				},
				{
					imgUrl: '/public/img/statebirdprovisions2.jpg',
					altTxt: 'statebirdprovisions2'
				},
				{
					imgUrl: '/public/img/statebirdprovisions3.jpg',
					altTxt: 'statebirdprovisions3'
				}
			]
		},
		{
			title: 'Brunch at Serpentine',
			region: 'San Francisco',
			neighborhood: 'Dogpatch',
			datetime: moment("2014-2-24 20:30").format('dddd, MMMM Do, h:mma'),
			partyMax: 4,
			attendees: [
				{
					name: 'Charlotte K.',
					imgUrl: '/public/img/prof7.jpg'
				},
				{
					name: 'Paige B.',
					imgUrl: '/public/img/prof8.jpg'
				},
				{
					name: 'Michael K.',
					imgUrl: '/public/img/prof9.jpg'
				},
				{
					name: 'Jasmine B.',
					imgUrl: '/public/img/prof10.jpg'
				}
			],
			pictures: [
				{
					imgUrl: '/public/img/serpentine1.jpg',
					altTxt: 'serpentine1'
				},
				{
					imgUrl: '/public/img/serpentine2.jpg',
					altTxt: 'serpentine2'
				},
				{
					imgUrl: '/public/img/serpentine3.jpg',
					altTxt: 'serpentine3'
				}
			]
		}
	];

// Public functions. ===========================================================
module.exports = function (app) {
	// API endpoints. ============================================================
	app.get('/api/events', function (req, res) {
		// Return events.
		res.send(events, 200);
	});

	app.post('/api/event', function (req, res) {
		// Add to database.
		res.send(events, 200);
	});

	// Yelp.
	app.post('/api/yelp', function (req, res) {
		var venueQuery = req.body.venueQuery;
		var location = req.body.location;
		yelp.getRestaurants(venueQuery, location, function (err, data) {
			if (err)
				res.send(err, 400);
			else
				res.send(data, 200);
		});
	});

	// Application route =========================================================
	app.get('/*', function (req, res) {
    res.sendfile('index.html', {'root': './public/views/'});
  });
};

}());