
  myApp.controller("panelLeftController", function($scope){

      $scope.removeVideo = function(id) {
          $scope.library.videos.splice(id, 1);
          $scope.setSelectedVideo(-1);
          $scope.deleteVideo();
      };

      $scope.playVideo = function(id) {
      $scope.setAddingVideo(false);
        $scope.setSelectedVideo(id);
        $scope.updateVideo();
      }

      $scope.add = function() {
           $scope.setAddingVideo(true);
      }
  })
  .directive('panelLeft', function() {
    return {
      templateUrl: 'panel-left/panel-left.html'
    };
 });