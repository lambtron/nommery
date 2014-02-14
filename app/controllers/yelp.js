'use strict';

(function() {

var yelp = require("yelp").createClient({
  consumer_key: "6NvgiW3gWD_ps_faNfyREw", 
  consumer_secret: "1N3rhiZP4hEOiMaQa9OlKyOzRSM",
  token: "FgVO7rFYcHNkjdeF8ELMr8RQrmQzuyVz",
  token_secret: "qEUv-YB1nnzreC3WB4KU-KiEFko"
});

module.exports = {
	getRestaurants: function getRestaurants (venueQuery, location, cb) {
		yelp.search({term: venueQuery, category_filter: 'food,restaurants',
			limit: 5, location: location}, function(error, data) {
			var arr = [];
			for (var i = 0; i < data.businesses.length; i++) {
				var restObj = {};
				restObj.name = data.businesses[i].name;
				restObj.id = data.businesses[i].id;
				restObj.image_url = data.businesses[i].image_url;
				restObj.city = data.businesses[i].location.city;
				restObj.neighborhood = data.businesses[i].location.neighborhoods[0];
				arr.push(restObj);
			}
		  cb(error, arr);
		});
	}
};

}());