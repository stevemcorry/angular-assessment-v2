App.controller('mainCtrl', function($scope, mainService) {

$scope.getPets = function() {
 mainService.getPets().then(function(results) {
    $scope.pets= results.data;
  });
};
$scope.getPets();

});
