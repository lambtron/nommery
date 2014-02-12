'use strict';

nommeryApp.controller('mainController',
  ['$scope', '$http',
	function ($scope, $http)
{
	// Initialize variables.
	var events = $scope.events = [];

	// Events.
	// - restaurantName
	// - restaurantNeighborhood
	// - Pictures of food
	// - Rating
	// Time date

	// Load available events.
	$http.get('/api/events')
	.success( function (data) {
		events = data;
		console.log('Event data: ' + data);
	})
	.error( function (data) {
		console.log('Server error: ' + data);
	});
}]);