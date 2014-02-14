'use strict';

// var moment = require('./moment');

(function() {

var yelp = require('../app/controllers/yelp');
var events = [
		{
			title: 'Dinner at State Bird Provisions',
			region: 'San Francisco',
			neighborhood: 'Western Addition',
			datetime: Date.now,
			partyMax: 2,
			attendees: [
				{
					name: '',
					imgUrl: ''
				},
				{
					name: '',
					imgUrl: ''
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
			datetime: Date.now,
			partyMax: 4,
			attendees: [
				{
					name: '',
					imgUrl: ''
				},
				{
					name: '',
					imgUrl: ''
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