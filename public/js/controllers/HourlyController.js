(function(){
  angular.module('ngWeather')
         .controller('HourlyController', HourlyControllerF);

  HourlyControllerF.$inject = ['$scope', 'WeatherService', 'GeoLocation'];

  function HourlyControllerF($scope, WeatherService, GeoLocation){

      $scope.hourlyData = WeatherService.weather;
      $scope.formattedAddress = GeoLocation.formattedAddress;
      console.log("$scope.hourlyData: ", $scope.hourlyData);
      console.log('$scope.formattedAddress', $scope.formattedAddress);
      $scope.summaryLookup = {
        'Drizzle': 'There will be some drizzle',

      }

      $scope.$watch(function(){
        return WeatherService.weather;
      },function(value){
        console.log("value: ", value);
        $scope.hourlyData = value;
      })
      $scope.$watch(function(){
        return GeoLocation.formattedAddress;
      },function(value){
        console.log("value: ", value);
        $scope.formattedAddress = value;
      })
  }
})();
