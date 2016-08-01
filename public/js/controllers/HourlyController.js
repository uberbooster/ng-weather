(function(){
  angular.module('ngWeather')
         .controller('HourlyController', HourlyControllerF);

  HourlyControllerF.$inject = ['$scope', 'WeatherService', 'GeoLocationService'];

  function HourlyControllerF($scope, WeatherService, GeoLocationService){
      $scope.round = function(number){
        if(Math.round(number/45)===8){
          return 0;
        } else {
        return Math.round(number/45);
        }
      };
      $scope.hourlyData = WeatherService.weather;
      $scope.formattedAddress = GeoLocationService.formattedAddress;
      console.log("$scope.hourlyData: ", $scope.hourlyData);
      console.log('$scope.formattedAddress', $scope.formattedAddress);
      $scope.summaryLookup = {
        'Drizzle': 'There will be some drizzle',
        'Clear': 'It will be clear',
        'Partly Cloudy': 'It will be partly cloudy',
        'Light Rain': 'There will be a light rain',
        'Dry and Partly Cloudy': 'It will be dry and partly cloudy',
        'Mostly Cloudy': 'It will be mostly cloudy',
        'Overcast': 'It will be overcast',
        'Rain': 'Prepare for rain'
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
