'use strict';

angular.module('myApp.viewMeeting', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewMeeting', {
    templateUrl: 'viewMeeting/viewMeeting.html',
    controller: 'ViewMeetingCtrl'
  });
}])

.controller('ViewMeetingCtrl', [function() {

}]);
