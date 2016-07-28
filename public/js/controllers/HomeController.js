(function(){
  angular.module('ngWeather')
         .controller('HomeController', HomeControllerF);

  HomeControllerF.$inject = ['$scope', 'WeatherService'];

  function HomeControllerF($scope, WeatherService){
    $scope.updateHourly = updateHourlyF;
    $scope.updateMinutely = updateMinutelyF;
    $scope.updateDaily = updateDailyF;
    $scope.latitude=29.6516;
    $scope.longitude=-82.3248;


    function updateHourlyF(latitude, longitude){
      console.log("latitude: ",latitude, " Longitude: ", longitude);
      WeatherService.getHourlyData(latitude, longitude);
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
