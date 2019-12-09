var myApp = angular.module("myApp", []);
    //config pour l'api youtube
    myApp.config([
      "$sceDelegateProvider", function($sceDelegateProvider){
        $sceDelegateProvider.resourceUrlWhitelist([
          // Allow same origin resource loads.
          'self',
          // Allow loading from our assets domain. **.
          'https://www.youtube.com/embed/**'
        ]);
      }
    ]);

  myApp.controller("libraryController", function($scope, $sce, libraryFactory, $location){

    // récupération du user via l'url
    var absUrl = $location.absUrl();
    var url = new URL(absUrl);
    var user = url.searchParams.get("user");

    // charge la library du user
    libraryFactory.getLibrary(user).then(function (data){
        $scope.library = data.data;
        $scope.updateVideo();
    }, function(msg) {
        alert(msg);
    });

    $scope.addingVideo = false;
    $scope.selectedVideo = 0;

    // met à jour l'url de la video
    $scope.updateVideo = function() {
       $scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/"+
       $scope.library.videos[$scope.selectedVideo].id);
    }

    // suppression de la video
    $scope.deleteVideo = function() {
        $scope.url = "";
        // affiche la page de recherche sur le panel-right au lieu d'afficher une page vide
        $scope.addingVideo = true;
    }

    // setter de addingVideo appelé depuis les directives filles
    $scope.setAddingVideo = function(value) {
        $scope.addingVideo = value;
    }

    // setter de selectedVideo appelé depuis les directives filles
    $scope.setSelectedVideo = function(value) {
            $scope.selectedVideo = value;
    }

    // ajout de la video dans le library
    $scope.addVideoToLibrary = function(video) {
        $scope.library.videos.push(video);
    }

  })
  .directive('library', function() {
    return {
        restrict: 'E',
        templateUrl: 'library/library.html'
    };
 });


