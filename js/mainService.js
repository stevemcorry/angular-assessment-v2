App.service('mainService',function($http) {

  this.getPets = function() {
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/pets'
    });
  };

});
