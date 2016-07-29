(function(){
  angular.module('ngWeather')
         .controller('HourlyController', HourlyControllerF);

  HourlyControllerF.$inject = ['$scope', 'WeatherService', 'GeoLocationService'];

  function HourlyControllerF($scope, WeatherService, GeoLocationService){

      $scope.hourlyData = WeatherService.weather;
      $scope.formattedAddress = GeoLocationService.formattedAddress;
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
        return GeoLocationService.formattedAddress;
      },function(value){
        console.log("value: ", value);
        $scope.formattedAddress = value;
      })
  }
})();
