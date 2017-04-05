app.controller('mainController', ['$scope','friendFactory', '$routeParams', function($scope, friendFactory, $routeParams) {
  friendFactory.index(function(friends){
    console.log('in main controller: ', friends)
    $scope.friends = friends;
  })
  $scope.delete = function(id){
    friendFactory.delete(id, function(returnedData){
      $scope.friend = returnedData;

    });
  }
}])
