(function(){
  angular.module('ngWeather')
         .controller('HourlyController', HourlyControllerF);

  HourlyControllerF.$inject = ['$scope', 'WeatherService'];

  function HourlyControllerF($scope, WeatherService){

      $scope.hourlyData = WeatherService.weather;
      console.log("$scope.hourlyData: ", $scope.hourlyData);
      $scope.summaryLookup = {
        'Drizzle': 'There will be some drizzle',
        
      }

      $scope.$watch(function(){
        return WeatherService.weather;
      },function(value){
        console.log("value: ", value);
        $scope.hourlyData = value;
      })
  }
})();
