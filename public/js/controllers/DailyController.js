(function(){
  angular.module('ngWeather')
         .controller('DailyController', DailyControllerF);

  DailyControllerF.$inject = ['$scope', 'WeatherService'];

  function DailyControllerF($scope, WeatherService){
    $scope.dailyData = WeatherService.weather;
    console.log("$scope.dailyData: ", $scope.dailyData);


    $scope.$watch(function(){
      return WeatherService.weather;
    },function(value){
      console.log("value: ", value);
      $scope.dailyData = value;
    })
  }
})();
