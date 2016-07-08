'use strict';

angular.module('myApp.viewJira', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewJira', {
    templateUrl: 'viewJira/viewJira.html',
    controller: 'ViewJiraCtrl'
  });
}])

.controller('ViewJiraCtrl', ['$scope', function($scope) {
  $scope.checkIfResultsReady = function() {
    $scope.resultsReady = ($scope.issueType === 'story' && $scope.role && $scope.outcome && $scope.benefit && $scope.acceptanceCriteria) ||
                          ($scope.issueType === 'bug' && $scope.repro && $scope.actual && $scope.expected) ||
                          ($scope.issueType === 'task' && $scope.requirements);
    console.log($scope.resultsReady)
  };

  $scope.setIssueType = function(type) {
    $scope.issueType = type;
    console.info($scope.issueType);
    console.info($scope.resultsReady);
  }

}]);
