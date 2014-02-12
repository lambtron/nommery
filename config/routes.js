'use strict';

// var moment = require('./moment');

(function() {

var events = [
		{
			title: 'Dinner at State Bird Provisions',
			neighborhood: 'Western Addition',
			datetime: Date.now,
			partyMax: 12,
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
					imgUrl: '',
					altTxt: ''
				},
				{
					imgUrl: '',
					altTxt: ''
				}
			]
		},
		{
			title: 'Brunch at Serpentine',
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
					imgUrl: '',
					altTxt: ''
				},
				{
					imgUrl: '',
					altTxt: ''
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

	// Application route =========================================================
	app.get('/*', function (req, res) {
    res.sendfile('index.html', {'root': './public/views/'});
  });
};

}());