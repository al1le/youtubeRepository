
  myApp.controller("panelLeftController", function($scope){
     $scope.library = {
     "name": "john",
     "videos": [{
        "title": "EasyVista IT Service Management for the Mobile User (Française)",
        "id":"WROlGNthbNE"
        }, {
        "title": "AngularJS Fundamentals In 60-ish Minutes",
        "id":"i9MHigUZKEM"
        }, {
        "title": "EasyVista IT Heroes - Episode 1","id":"CkZKknKjEwo"
        }]};
  })
  .directive('panelLeft', function() {
    return {
      templateUrl: 'panel-left/panel-left.html'
    };
 });