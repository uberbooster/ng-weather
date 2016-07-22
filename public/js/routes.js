(function(){
  angular.module('ngWeather')
         .config(RouteConfigF);

  RouteConfigF.$inject = ['$routeProvider','$locationProvider'];

  function RouteConfigF($routeProvider, $locationProvider){
    $routeProvider
    .when('/',{
      template: 'home'
    })
    .when('/hourly',{
      template: 'hourly'
    })
    .when('/minutely',{
      template: 'minutely'
    })
    .when('/daily',{
      template: 'daily'
    })
    .otherwise({
      redirectTo: '/'
    });

    // $locationProvider.html5Mode(true);

  }
})();
