var myApp = angular.module("myApp", []);
  myApp.controller("libraryController", function($scope){
     $scope.customer = {
         name: 'Naomi',
         address: '1600 Amphitheatre'
       };
  })
  .directive('library', function() {
    return {
      templateUrl: 'library/library.html'
    };
 });


