(function(){
  angular.module('ngWeather')
         .controller('HomeController', HomeControllerF);

  HomeControllerF.$inject = ['$scope', 'WeatherService'];

  function HomeControllerF($scope, WeatherService){
    $scope.updateHourly = updateHourlyF;
    $scope.updateMinutely = updateMinutelyF;
    $scope.updateDaily = updateDailyF;

    function updateHourlyF(latitude, longitude){
      console.log("latitude: ",latitude, " Longitude: ", longitude);
      WeatherService.getHourlyData(latitude, longitude);
    }
    function updateMinutelyF(latitude, longitude){}
    function updateDailyF(latitude, longitude){}
  }
})();
