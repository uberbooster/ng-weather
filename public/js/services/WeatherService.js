(function(){
  angular.module('ngWeather')
         .factory('WeatherService', WeatherServiceF);

WeatherServiceF.$inject = ['$http'];

function WeatherServiceF($http){
  var passphrase = 'i like cheese and bacon and some other things too';
  var baseUrl = 'https://quiet-bayou-88937.herokuapp.com/';
  var config = {headers: {'passphrase': passphrase}};
  var service = {
    getHourlyData: getHourlyDataF,
    getMinutelyData: getMinutelyDataF,
    getDailyData: getDailyDataF,
    weather: {}
  };
  return service;

  function getHourlyDataF(lat, lon){
    var url = baseUrl + 'forecast/hourly/' + lat + ',' + lon;
    console.log("Hourly: ",service.weather);
    return $http.get(url, config)
                .then(function(response){
                  service.weather = response.data;
                  console.log("Hourly: ",service.weather);
                });
  };

  function getMinutelyDataF(lat, lon){
    var url = baseUrl + 'forecast/minutely/' + lat + ',' + lon;
    console.log("Minutely: ",service.weather);
    return $http.get(url, config)
                .then(function(response){
                  service.weather = response.data;
                  console.log("Minutely: ",service.weather);
                });
  };

  function getDailyDataF(lat, lon){
    var url = baseUrl +'forecast/daily/' + lat + ',' + lon;
    console.log("Daily: ",service.weather);
    return $http.get(url, config)
                .then(function(response){
                  service.weather = response.data;
                  console.log("Daily: ",service.weather);
                });
  };
};
})();
