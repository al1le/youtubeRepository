
  myApp.controller("panelLeftController", function($scope){

      // suppression de la video dans le library en fonction de l'index
      $scope.removeVideo = function(id) {
          $scope.library.videos.splice(id, 1);
          $scope.setSelectedVideo(-1);
          $scope.deleteVideo();
      };

      // affiche la video
      $scope.playVideo = function(id) {
      $scope.setAddingVideo(false);
        $scope.setSelectedVideo(id);
        $scope.updateVideo();
      }

      // ajout de video, recherche de video via l'api youtube
      $scope.add = function() {
           $scope.setAddingVideo(true);
      }
  })
  .directive('panelLeft', function() {
    return {
        restrict: 'E',
        templateUrl: 'panel-left/panel-left.html'
    };
 });