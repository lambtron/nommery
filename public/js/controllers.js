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
	['$scope', '$http', '$routeParams', '$location',
	function ($scope, $http, $routeParams, $location)
{
	var eventObject = $scope.eventObject = {
		title: 'State Bird Provisions',
		region: 'San Francisco',
		neighborhood: 'Western Addition',
		datetime: Date.now,
		partyMax: 2,
	};

	var submitYelp = $scope.submitYelp = function () {
		var obj = {
			venueQuery: eventObject.title
		};
		console.log(obj);
		$http.post('/api/yelp', obj)
		.success( function (data) {
			console.log(data);
		})
		.error( function (data) {
			console.log('server error: ' + data);
		});
	};

}]);