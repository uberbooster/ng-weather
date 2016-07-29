(function(){
  angular.module('ngWeather')
         .controller('DailyController', DailyControllerF);

  DailyControllerF.$inject = ['$scope', 'WeatherService', 'GeoLocation'];

  function DailyControllerF($scope, WeatherService, GeoLocation){
    $scope.dailyData = WeatherService.weather;
    console.log("$scope.dailyData: ", $scope.dailyData);


    $scope.$watch(function(){
      return WeatherService.weather;
    },function(value){
      console.log("value: ", value);
      $scope.dailyData = value;
    })
    $scope.$watch(function(){
      return GeoLocation.formattedAddress;
    },function(value){
      console.log("value: ", value);
      $scope.formattedAddress = value;
    })
  }
})();
