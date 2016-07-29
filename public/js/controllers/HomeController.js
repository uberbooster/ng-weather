(function(){
  angular.module('ngWeather')
         .controller('HomeController', HomeControllerF);

  HomeControllerF.$inject = ['$scope', 'WeatherService', 'GeoLocationService'];

  function HomeControllerF($scope, WeatherService, GeoLocationService){
    console.log(GeoLocationService)
    $scope.updateHourly = updateHourlyF;
    $scope.updateMinutely = updateMinutelyF;
    $scope.updateDaily = updateDailyF;

    function updateHourlyF(location){
      GeoLocationService.getLocationData(location)
                  .then(function(locationFromGoogle){
                    var lat = locationFromGoogle.lat;
                    var lon = locationFromGoogle.lng;
                    return WeatherService.getHourlyData(lat, lon);
                  });
    }
    function updateMinutelyF(location){
      GeoLocationService.getLocationData(location)
                 .then(function(locationFromGoogle){
                   var lat = locationFromGoogle.lat;
                   var lon = locationFromGoogle.lng;
                   return WeatherService.getMinutelyData(lat, lon);
                 });
    }
    function updateDailyF(location){
      GeoLocationService.getLocationData(location)
                 .then(function(locationFromGoogle){
                   var lat = locationFromGoogle.lat;
                   console.log("updateDailyF - lat: ",lat);
                   var lon = locationFromGoogle.lng;
                   console.log("updateDailyF - lng: ",lon);
                   return WeatherService.getDailyData(lat, lon);
                 });
    }
  }
})();
