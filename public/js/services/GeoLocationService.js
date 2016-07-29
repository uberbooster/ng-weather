(function(){
  angular.module('ngWeather')
         .factory('GeoLocationService', GeoLocationServiceF);

GeoLocationServiceF.$inject = ['$http'];

function GeoLocationServiceF($http){
  var baseUrlGoogleLocationToCoordinates = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

  var service = {
    getLocationData: getLocationDataF,
    formattedAddress: ''
  };
  return service;

  function getLocationDataF(location){
    return $http.get(baseUrlGoogleLocationToCoordinates + location)
      .then(function(response){
        console.log('GeoLocationService Response:', response)
        service.formattedAddress = response.data.results[0].formatted_address;
        console.log("response.data.results[0].geometry.location; ",response.data.results[0].geometry.location);
        return response.data.results[0].geometry.location;
      });
  }

};

})();
