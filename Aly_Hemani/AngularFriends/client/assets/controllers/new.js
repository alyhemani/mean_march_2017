app.controller('newController', ['$scope','friendFactory', function($scope, friendFactory) {
  var index = function () {
      friendFactory.index(function(data) {
          console.log(data);
          $scope.friends = data;
      })
  }
  index();
  $scope.create = function() {
    console.log($scope.newfriend);
    console.log("firing")
      friendFactory.create($scope.newfriend, function(data) {
          // If we needed to display an updated list of friends on this page, we would have to do this;
          $scope.friends = data;
      });
  }
}]);
