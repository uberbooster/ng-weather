(function(){
  angular.module('ngWeather')
         .controller('HomeController', HomeControllerF);

  HomeControllerF.$inject = ['$scope', 'WeatherService', 'GeoLocation'];

  function HomeControllerF($scope, WeatherService, GeoLocation){
    console.log(GeoLocation)
    $scope.updateHourly = updateHourlyF;
    $scope.updateMinutely = updateMinutelyF;
    $scope.updateDaily = updateDailyF;
    $scope.latitude=29.6516;
    $scope.longitude=-82.3248;


    function updateHourlyF(location){
      console.log('Location:', location);
      GeoLocation.getLocationData(location)
                  .then(function(locationFromGoogle){
                    console.log('responseFromGoogleFromGeoLocationService', locationFromGoogle);
                    var lat = locationFromGoogle.lat;
                    var lon = locationFromGoogle.lng;
                    return WeatherService.getHourlyData(lat, lon);
                  })
                  .then(function(weatherData){
                    console.log(weatherData);
                  });
    }
    function updateMinutelyF(latitude, longitude){
      console.log("latitude: ",latitude, " Longitude: ", longitude);
      WeatherService.getMinutelyData(latitude, longitude);
    }
    function updateDailyF(latitude, longitude){
      console.log("latitude: ",latitude, " Longitude: ", longitude);
      WeatherService.getDailyData(latitude, longitude);
    }
  }
})();
