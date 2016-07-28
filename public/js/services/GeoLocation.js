(function(){
  angular.module('ngWeather')
         .factory('GeoLocation', GeoLocationF);

GeoLocationF.$inject = ['$http'];

function GeoLocationF($http){
  var baseUrlGoogleLocationToCoordinates = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

  var service = {
    getLocationData: getLocationDataF,
    formattedAddress: ''
  };
  return service;

  function getLocationDataF(location){
    return $http.get(baseUrlGoogleLocationToCoordinates + location)
      .then(function(response){
        console.log('GeoLocation Response:', response)
        service.formattedAddress = response.data.results[0].formatted_address;
        return response.data.results[0].geometry.location;
      });
  }

};

})();
