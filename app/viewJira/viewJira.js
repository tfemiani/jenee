'use strict';

angular.module('myApp.viewJira', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewJira', {
    templateUrl: 'viewJira/viewJira.html',
    controller: 'ViewJiraCtrl'
  });
}])

.controller('ViewJiraCtrl', [function() {

}]);
