  myApp.controller("searchVideoController", function($scope, libraryFactory, $timeout){
    $scope.youtube = '';
    $scope.youtubeSearch = function(searchTerm) {
        // utilisation de l'api youtube
        libraryFactory.getYoutube(searchTerm, function(data) {
            $timeout(function(){
                $scope.videos = data.data.items
                $scope.videoId = $scope.videos[0].id.videoId
                $scope.videoDetails = $scope.videos[0].snippet
                $scope.youtubeUrl = 'https://www.youtube.com/embed/'+$scope.videoId
            }, 500)

        })
        }
        // recherche de la video
        $scope.youtubeSearch($scope.youtube);

        // ajout de la video dans le library
        $scope.addTolibrary = function(video) {
            var dataVideo = {
                "title": video.snippet.title,
                "id": video.id.videoId
            }
            $scope.addVideoToLibrary(dataVideo);
        }

  })
  .directive('searchVideo', function() {
    return {
      restrict: 'E',
      templateUrl: 'search-video/search-video.html'
    };
 });