app.controller('editController', ['$scope','friendFactory', '$routeParams', function($scope, friendFactory, $routeParams) {
   $scope.update = function(){
     friendFactory.update($scope.friend, $routeParams.id, function(data) {})
   };

  $scope.showu = function(){
    friendFactory.show($routeParams.id, function(returnedData){
      $scope.friend = returnedData;

    });
  }
  $scope.showu()
}]);
