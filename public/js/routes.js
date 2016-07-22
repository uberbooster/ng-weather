(function(){
  angular.module('ngWeather')
         .config(RouteConfigF);

  RouteConfigF.$inject = ['$routeProvider','$locationProvider'];

  function RouteConfigF($routeProvider, $locationProvider){
    $routeProvider
    .when('/',{
      templateUrl: 'html/views/home.html',
      controller: 'HomeController'
    })
    .when('/hourly',{
      templateUrl: 'html/views/hourly.html',
      controller: 'HourlyController'
    })
    .when('/minutely',{
      templateUrl: 'html/views/minutely.html',
      controller: 'MinutelyController'
    })
    .when('/daily',{
      templateUrl: 'html/views/daily.html',
      controller: 'DailyController' 
    })
    .otherwise({
      redirectTo: '/'
    });

    // $locationProvider.html5Mode(true);

  }
})();
