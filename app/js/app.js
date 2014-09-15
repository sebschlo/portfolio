'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'portControllers',
  'myApp.version'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {
          templateUrl: 'views/home.html',
          controller: 'homeCtrl'
      });
//      when('/project/:projectId', {
//          templateUrl: 'views/project.html',
//          controller: 'projectCtrl'
//      });
//      otherwise({redirectTo: 'views/home.html'
//      });
}]);
