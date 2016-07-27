(function(){
  angular.module('ngWeather')
         .factory('GeoLocation', GeoLocationF);

GeoLocationF.$inject = ['$http', '$scope'];

function GeoLocationF($http, $scope){
  var baseUrlGoogleLocationToCoordinates = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  $http.get(baseUrlGoogleLocationToCoordinates + $scope.location)
    .then(function(response){
      $scope.geoInfo = response.data;
      console.log("$scope.geoInfo: ",$scope.geoInfo);
    });
};



}();
