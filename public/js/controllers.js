'use strict';

nommeryApp.controller('mainController',
  ['$scope', '$http',
	function ($scope, $http)
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