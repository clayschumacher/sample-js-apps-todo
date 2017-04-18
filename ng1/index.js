var lunchLearnApp = angular.module('lunchLearnApp', []);

lunchLearnApp.controller('lunchLearnCtrl', ['$scope', function($scope) {
  $scope.currentList = ['Paint the house', 'Mow the lawn', 'Get milk', 'Clean my room'];

  $scope.addItem = function(itemToAdd) {
    if (itemToAdd !== "") {
      $scope.currentList.push(itemToAdd);
      $scope.itemToAdd = "";
      $scope.error = "";
    }
    else {
      $scope.error = "You have to enter something in the text box before I can add it to the list!"
    }
  }

  $scope.removeItem = function(indexToRemove) {
    $scope.currentList.splice(indexToRemove, 1);
  }
}]);