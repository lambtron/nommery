'use strict';

nommeryApp.controller('viewController',
  ['$scope', '$http', '$routeParams', '$location',
	function ($scope, $http, $routeParams, $location)
{
	// Initialize variables.
	var events = $scope.events = [];
	var regions = $scope.regions = [
		"San Francisco",
		"South Bay",
		"East Bay",
		"North Bay"
	];

	$scope.filterRegion = {
		placeholder: 'Filter by Region',
    allowClear: true,
    multiple: true
  };

  var selectedRegion = $scope.selectedRegion = [];

  var showEvents = $scope.showEvents = function showEvents () {
  	$location.path('/events/create');
  };

	// Load available events.
	$http.get('/api/events')
	.success( function (data) {
		$scope.events = data;
		console.log('Event data: ' + data);
	})
	.error( function (data) {
		console.log('Server error: ' + data);
	});
}]);

nommeryApp.controller('createController',
	['$scope', '$http', '$routeParams', '$location', '$moment',
	function ($scope, $http, $routeParams, $location, $moment)
{
	var eventObject = $scope.eventObject = {
		title: 'State Bird Provisions',
		region: 'San Francisco',
		neighborhood: 'Western Addition',
		datetime: $moment().format('h:mma, m/DD/YY'),
		partyMax: 2,
	};

	var venues = $scope.venues = [];

	var createEvent = $scope.createEvent = function createEvent () {
		$http.post('/api/event', eventObject)
		.success( function (data) {
			$location.path('/events/view');
		})
		.error( function (data) {
			console.log('Error: ' + data);
		});
	}

	// var queryYelp = $scope.queryYelp = function () {
	// 	var obj = {
	// 		venueQuery: eventObject.title,
	// 		location: eventObject.region
	// 	};
	// 	console.log(obj);
	// 	$http.post('/api/yelp', obj)
	// 	.success( function (data) {
	// 		$scope.venues = data;
	// 		console.log(data);
	// 	})
	// 	.error( function (data) {
	// 		console.log('server error: ' + data);
	// 	});
	// };

}]);