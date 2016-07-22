(function(){
  angular.module('ngWeather')
         .controller('SimpleController', SimpleControllerF)

SimpleControllerF.$inject = ['$scope', 'WeatherService'];

function SimpleControllerF($scope, WeatherService){
  $scope.message = "Hello There!";
  WeatherService.getHourlyData(29, -82);
  WeatherService.getMinutelyData(29, -82);
  WeatherService.getDailyData(29, -82);
};

})();
