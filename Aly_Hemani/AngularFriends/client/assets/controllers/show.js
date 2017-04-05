app.controller('showController', ['$scope','friendFactory','$routeParams', function($scope, friendFactory, $routeParams) {
  $scope.show = function(){
    friendFactory.show($routeParams.id, function(returnedData){
      $scope.friend = returnedData;

    });
  }
  $scope.show()
}])
