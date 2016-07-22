(function(){
  angular.module('ngWeather')
         .factory('WeatherService', WeatherServiceF);

WeatherServiceF.$inject = ['$http'];

function WeatherServiceF($http){
  var passphrase = 'i like cheese and bacon and some other things too';
  var baseUrl = 'https://quiet-bayou-88937.herokuapp.com/';
  var service = {
    getHourlyData: getHourlyDataF,
    getMinutelyData: getMinutelyDataF,
    getDailyData: getDailyDataF,
    weather: {}
  };
  return service;

  function getHourlyDataF(lat, lon){
    var url = baseUrl + 'forecast/hourly/' + lat + ',' + lon;
    console.log(service.weather);
    var config = {
      headers: {
        'passphrase': passphrase
      }
};
    return $http.get(url, config)
                .then(function(response){
                  service.weather = response.data;
                  console.log(service.weather);
                });
  };

  function getMinutelyDataF(lat, lon){}
  function getDailyDataF(lat, lon){}
}
})();
