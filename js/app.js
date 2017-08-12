var app = angular.module('culturalHall', ['ngRoute', 'ngDragDrop','ngScrollbar'])
app.config(function($httpProvider){
    $httpProvider.interceptors.push('httpRequestInterceptor');
})

.config(function($routeProvider){
    $routeProvider.
        when('/Home', {
            templateUrl: 'Pages/Home/homePage.html'
        }).
        when('/VintageTemples', {
            templateUrl: 'Pages/VintageTemples/VintageTemples.html'
        }).
        when('/PicturesOfChrist', {
            templateUrl: 'Pages/PicturesOfChrist/PicturesOfChrist.html'
        }).
        when('/HomeDecor', {
            templateUrl: 'Pages/HomeDecor/HomeDecor.html'
        }).
        when('/Admin23', {
            templateUrl: 'Pages/Admin23/addShows.html'
        }).
         otherwise({
            redirectTo: '/Home'
        });
});


