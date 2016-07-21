(function(){
  angular.module('ngWeather')
         .controller('SimpleController', SimpleControllerF)

SimpleControllerF.$inject = ['$scope'];

function SimpleControllerF($scope){
  $scope.message = "Hello There!";
};

})();
