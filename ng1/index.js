var lunchLearnApp = angular.module('lunchLearnApp', []);

lunchLearnApp.controller('lunchLearnCtrl', ['$scope', function($scope) {
  $scope.currentList = ['Paint the house', 'Mow the lawn', 'Get milk', 'Clean my room'];
}]);