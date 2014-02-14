nommeryApp.config( ['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
  when('/events/view', {
    templateUrl: 'public/views/pages/viewEvents.html',
    controller: 'viewController'
  }).
  when('/events/create', {
    templateUrl: 'public/views/pages/createEvent.html',
    controller: 'createController'
  }).
  otherwise({
    redirectTo: '/events/view'
  });
}]);