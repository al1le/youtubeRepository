myApp.factory('libraryFactory', function($http, $location, $q){

        var factory = {};

        // utilisation de l'api youtube
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

        // charge la library en fonction du user
        factory.getLibrary = function(user) {
         var deferred = $q.defer();
            $http.get("./../libraries/"+user+".lib").then(
                (data, status) => deferred.resolve(data)) ,
                (data, status) => deferred.reject("erreur");
            return deferred.promise;
        }

        return factory;
    });