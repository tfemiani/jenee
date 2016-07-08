'use strict';

angular.module('myApp.viewMeeting', ['ngRoute', 'ngCookies'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewMeeting', {
    templateUrl: 'viewMeeting/viewMeeting.html',
    controller: 'ViewMeetingCtrl'
  });
}])

.controller('ViewMeetingCtrl', ['$scope', '$cookies', function($scope, $cookies) {
  $scope.bg = 'Knausgaard austin swag PBR&B fashion axe, sriracha pug fixie. Locavore twee tilde migas, normcore irony blog paleo poutine man braid. Everyday carry mlkshk PBR&B skateboard, try-hard fingerstache forage disrupt thundercats. Roof party raw denim vinyl hella normcore messenger bag, mlkshk crucifix vegan direct trade kinfolk tofu.';
  $scope.agenda = '1. Excepteur plaid whatever cliche\n';
  $scope.agenda += '2. Veniam salvia taxidermy';
  $scope.appendix = 'See http://x.co/practices'

  // Use cookies to save links
  $scope.saveZoomLink = function(){
    if ($scope.zoomName) {
      $cookies.put('zoomName', $scope.zoomName);
      console.info('saved zoom name')
    }
    if ($scope.zoomNumber) {
      $cookies.put('zoomNumber', $scope.zoomNumber);
      console.info('saved zoom number')
    }
    console.info('cookies attempt done');
    console.info($cookies);
  };

  $scope.clearCookies = function(){
    $cookies.remove('zoomName');
    $scope.zoomName = null;
    $cookies.remove('zoomNumber');
    $scope.zoomNumber = null;
    console.info('cookies cleared');
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
