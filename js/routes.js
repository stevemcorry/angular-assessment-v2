App.config(function($urlRouterProvider,$stateProvider) {
  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: '../views/home.html'
    })
    .state('blog',{
      url: '/blog',
      templateUrl: '../views/blog.html'
    })
    .state('about',{
      url: '/about',
      templateUrl: '../views/about.html'
    })
    .state('pets',{
      url: '/pets',
      templateUrl: '../views/pets.html'
    })
    .state('petbio',{
      url: '/petbio/:id',
      templateUrl: '../views/pet-bio.html',
      controller: function ($stateParams,$scope,$http){
        var id = $stateParams.id;
        $scope.getbio = function() {
          $http({
            method: 'GET',
            url: "http://practiceapi.devmounta.in/pets/"+id
          }).then(function(results) {
            $scope.dogBio = results.data;
          });
        };
        $scope.getbio();
      }
    });
    $urlRouterProvider
			.otherwise('/');

});
