/**
 * Created by brecht on 10/03/2016.
 */
var app = angular.module("e5mode",[  "ngAnimate", "ngRoute", "ngSanitize",  "mobile-angular-ui"]);

//routing
app.config(['$routeProvider', '$locationProvider',
    function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: "templates/Home.html"
    }).when("/register", {
        templateUrl: "templates/register.html"
    }).when('/form-name', {
        templateUrl: "templates/form-name.html"
    }).when('/form-address', {
        templateUrl: "templates/form-address.html"
    }).when('/form-date', {
        templateUrl: "templates/form-date.html"
    }).when('/confirm-data', {
        templateUrl: "templates/confirm-data.html"
    }).when('/optional', {
        templateUrl: "templates/form-optional.html"
    }).when('/voltooid', {
        templateUrl: "templates/voltooid.html"
    }).otherwise({redirectTo: "/home"}); //default route
}]);