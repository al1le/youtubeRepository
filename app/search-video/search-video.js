  myApp.controller("searchVideoController", function($scope, libraryFactory, $timeout){
    $scope.youtube = 'web development' //default search term
    $scope.youtubeSearch = function(searchTerm) {

    /*
            libraryFactory.getYoutube(searchTerm, function(data) {
        //setup a timeout function to delay search from starting until i have a few letters typed
                $timeout(function(){
                    $scope.videos = data.data.items
                    $scope.videoId = $scope.videos[0].id.videoId // by default I display the frist item in the array
                    $scope.videoDetails = $scope.videos[0].snippet
                    $scope.youtubeUrl = 'httindexps://www.youtube.com/embed/'+$scope.videoId
                }, 500)

            })*/
            $scope.videos =  [
                              {
                               "kind": "youtube#searchResult",
                               "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/1_BdOeYBN5ZaPXj42H4tunOfFvI\"",
                               "id": {
                                "kind": "youtube#video",
                                "videoId": "h0XMbCbEiSM"
                               },
                               "snippet": {
                                "publishedAt": "2019-12-04T19:12:36.000Z",
                                "channelId": "UCaybrunQi8xWgPMgv1AYBHw",
                                "title": "Test AirPods Pro - Presque Pro",
                                "description": "AirPods Pro, ça te dit quelque chose ? Mon Instagram : https://www.instagram.com/jbaptisten/ - Abonne-toi : http://bit.ly/HXZ0Hf - - - - - - - - - Participer au ...",
                                "thumbnails": {
                                 "default": {
                                  "url": "https://i.ytimg.com/vi/h0XMbCbEiSM/default.jpg",
                                  "width": 120,
                                  "height": 90
                                 },
                                 "medium": {
                                  "url": "https://i.ytimg.com/vi/h0XMbCbEiSM/mqdefault.jpg",
                                  "width": 320,
                                  "height": 180
                                 },
                                 "high": {
                                  "url": "https://i.ytimg.com/vi/h0XMbCbEiSM/hqdefault.jpg",
                                  "width": 480,
                                  "height": 360
                                 }
                                },
                                "channelTitle": "TheiCollection",
                                "liveBroadcastContent": "none"
                               }
                              },
                              {
                               "kind": "youtube#searchResult",
                               "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/tphtb0DTWIlAvhahppTuys9kGbs\"",
                               "id": {
                                "kind": "youtube#video",
                                "videoId": "bwEQ0R84UkI"
                               },
                               "snippet": {
                                "publishedAt": "2018-05-01T12:02:55.000Z",
                                "channelId": "UCt6IQpsggvn6zmalhPglSEA",
                                "title": "Quel Type de Fille es-tu ? (Test de Personnalité)",
                                "description": "Pour ne rien perdre de Sympa, abonnez-vous!: https://goo.gl/6E4Xna -------------------------------------------------------------------- Fais ce test et découvres-en plus sur ta ...",
                                "thumbnails": {
                                 "default": {
                                  "url": "https://i.ytimg.com/vi/bwEQ0R84UkI/default.jpg",
                                  "width": 120,
                                  "height": 90
                                 },
                                 "medium": {
                                  "url": "https://i.ytimg.com/vi/bwEQ0R84UkI/mqdefault.jpg",
                                  "width": 320,
                                  "height": 180
                                 },
                                 "high": {
                                  "url": "https://i.ytimg.com/vi/bwEQ0R84UkI/hqdefault.jpg",
                                  "width": 480,
                                  "height": 360
                                 }
                                },
                                "channelTitle": "SYMPA",
                                "liveBroadcastContent": "none"
                               }
                              },
                              {
                               "kind": "youtube#searchResult",
                               "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/ITsPOW8_0Mu4etZo6I4lJEMxX5A\"",
                               "id": {
                                "kind": "youtube#channel",
                                "channelId": "UCEOWFJSDlfEgM_iPduEuHeg"
                               },
                               "snippet": {
                                "publishedAt": "2016-06-21T10:44:27.000Z",
                                "channelId": "UCEOWFJSDlfEgM_iPduEuHeg",
                                "title": "Test Divertidos",
                                "description": "Test Divertidos ▻ http://bit.ly/TestDivertidos ◅ Únete! Ya somos más de 600.000! Aquí podrás encontrar los test divertidos más originales de Youtube!",
                                "thumbnails": {
                                 "default": {
                                  "url": "https://yt3.ggpht.com/-crYJ_Zp5fEs/AAAAAAAAAAI/AAAAAAAAAAA/VVaWYRtsL14/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                 },
                                 "medium": {
                                  "url": "https://yt3.ggpht.com/-crYJ_Zp5fEs/AAAAAAAAAAI/AAAAAAAAAAA/VVaWYRtsL14/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                 },
                                 "high": {
                                  "url": "https://yt3.ggpht.com/-crYJ_Zp5fEs/AAAAAAAAAAI/AAAAAAAAAAA/VVaWYRtsL14/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                 }
                                },
                                "channelTitle": "Test Divertidos",
                                "liveBroadcastContent": "upcoming"
                               }
                              },
                              {
                               "kind": "youtube#searchResult",
                               "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/RqFFIjEPdHkQ8X_-HQp4lV5mTo4\"",
                               "id": {
                                "kind": "youtube#video",
                                "videoId": "3J0VZ6JX60w"
                               },
                               "snippet": {
                                "publishedAt": "2018-02-04T12:07:04.000Z",
                                "channelId": "UCt6IQpsggvn6zmalhPglSEA",
                                "title": "10 Choix Les Plus Difficiles (Test de Personnalité)",
                                "description": "Pour ne rien perdre de Sympa, abonnez-vous!: https://goo.gl/6E4Xna -------------------------------------------------------------------- Sympa te propose de faire 10 choix ...",
                                "thumbnails": {
                                 "default": {
                                  "url": "https://i.ytimg.com/vi/3J0VZ6JX60w/default.jpg",
                                  "width": 120,
                                  "height": 90
                                 },
                                 "medium": {
                                  "url": "https://i.ytimg.com/vi/3J0VZ6JX60w/mqdefault.jpg",
                                  "width": 320,
                                  "height": 180
                                 },
                                 "high": {
                                  "url": "https://i.ytimg.com/vi/3J0VZ6JX60w/hqdefault.jpg",
                                  "width": 480,
                                  "height": 360
                                 }
                                },
                                "channelTitle": "SYMPA",
                                "liveBroadcastContent": "none"
                               }
                              },
                              {
                               "kind": "youtube#searchResult",
                               "etag": "\"j6xRRd8dTPVVptg711_CSPADRfg/2kMu_-tLRzzaQK7y_5nRTvoF1nY\"",
                               "id": {
                                "kind": "youtube#video",
                                "videoId": "JohUe-9MJo8"
                               },
                               "snippet": {
                                "publishedAt": "2019-12-04T08:45:01.000Z",
                                "channelId": "UCNEWZqjcguqWZOG8yZZpIFg",
                                "title": "Euro NCAP Crash &amp; Safety Tests of Peugeot 2008 2019",
                                "description": "Euro NCAP performs a series of crash and safety tests on car models: - a frontal impact test, the car impacts a rigid barrier - an offset frontal impact test, 40% of ...",
                                "thumbnails": {
                                 "default": {
                                  "url": "https://i.ytimg.com/vi/JohUe-9MJo8/default.jpg",
                                  "width": 120,
                                  "height": 90
                                 },
                                 "medium": {
                                  "url": "https://i.ytimg.com/vi/JohUe-9MJo8/mqdefault.jpg",
                                  "width": 320,
                                  "height": 180
                                 },
                                 "high": {
                                  "url": "https://i.ytimg.com/vi/JohUe-9MJo8/hqdefault.jpg",
                                  "width": 480,
                                  "height": 360
                                 }
                                },
                                "channelTitle": "Euro NCAP",
                                "liveBroadcastContent": "none"
                               }
                              }
                             ]

        }
        $scope.youtubeSearch($scope.youtube);

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
      templateUrl: 'search-video/search-video.html'
    };
 });