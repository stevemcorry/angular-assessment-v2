var App = angular.module('assessment',['ui.router']);
App.directive('petDir',function() {
  return {
        restrict: 'E',
        templateUrl: "../views/pet-tmpl.html",
      };
    });
