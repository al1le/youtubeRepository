  myApp.controller("panelRightController", function($scope){
     $scope.customer = {
         name: 'Naomi',
         address: '1600 Amphitheatre'
       };
  })
  .directive('panelRight', function() {
    return {
      templateUrl: 'panel-right/panel-right.html'
    };
 });