'use strict';

angular.module('myApp.viewMeeting', ['ngRoute', 'ngCookies'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewMeeting', {
    templateUrl: 'viewMeeting/viewMeeting.html',
    controller: 'ViewMeetingCtrl'
  });
}])

.controller('ViewMeetingCtrl', ['$scope', '$cookies', function($scope, $cookies) {
  // Use cookies to save links
  $scope.saveZoomLink = function(){
    if ($scope.zoomName) {
      $cookies.put('zoomName', $scope.zoomName);
      $scope.notificationMessage = 'Saved Zoom Name "' + $scope.zoomName + '"!';
    }
    if ($scope.zoomNumber) {
      $cookies.put('zoomNumber', $scope.zoomNumber);
      $scope.notificationMessage = 'Saved Zoom Number "' + $scope.zoomNumber + '"!';
    }
  };

  $scope.clearCookies = function(){
    $cookies.remove('zoomName');
    $scope.zoomName = null;
    $cookies.remove('zoomNumber');
    $scope.zoomNumber = null;
    $scope.notificationMessage = 'Zoom Link successfully cleared!';
  };

  // Retrieve links from cookies
  var zoomName = $cookies.get('zoomName');
  if (zoomName) {
    $scope.zoomName = zoomName;
  }

  var zoomNumber = $cookies.get('zoomNumber');
  if (zoomNumber) {
    $scope.zoomNumber = zoomNumber;
  }
}]);
