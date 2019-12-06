var myApp = angular.module("myApp", []);
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
    myApp.factory('libraryFactory', function($http, $location, $q){

        var factory = {};

        factory.getYoutube = function(term, callback) {

            var params = {
                part: 'snippet',
                key: 'AIzaSyA1OuB-rFD6--IFoU4tWlSDAr-p8ABTr6k',
                q: term,
                type: 'video',
                maxResults: 5
            };

            $http.get('https://www.googleapis.com/youtube/v3/search', {params: params}).then(function(data){
                callback(data);
            })
        }

        factory.getLibrary = function(user) {
         var deferred = $q.defer();
            $http.get("./../libraries/"+user+".lib").then(function(data, status) {
                deferred.resolve(data);
            }) ,(function(data, status) {
                deferred.reject("erreur");
            });
            return deferred.promise;
        }


        return factory;
    });
  myApp.controller("libraryController", function($scope, $sce, libraryFactory, $location){

    var absUrl = $location.absUrl();
    var url = new URL(absUrl);
    var user = url.searchParams.get("user");

    libraryFactory.getLibrary(user).then(function (data){
        $scope.library = data.data;
        $scope.updateVideo();
    }, function(msg) {
        alert(msg);
    });

    $scope.addingVideo = false;

    $scope.selectedVideo = 0;

    $scope.updateVideo = function() {
       $scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/"+
       $scope.library.videos[$scope.selectedVideo].id);
    }

    $scope.deleteVideo = function() {
        $scope.url = "";
    }

    $scope.setAddingVideo = function(value) {
        $scope.addingVideo = value;
    }

    $scope.setSelectedVideo = function(value) {
            $scope.selectedVideo = value;
    }

    $scope.addVideoToLibrary = function(video) {
        $scope.library.videos.push(video);
    }

  })
  .directive('library', function() {
    return {
      templateUrl: 'library/library.html'
    };
 });


