/**
 * Created by brecht on 10/03/2016.
 */

    /*
      * ngAnimate gives errors when included
      * Error: $injector:unpr Unknown Provider
      * versons should be correct...
     */
var app = angular.module("e5mode",[  "ngAnimate", "ngRoute", "ngSanitize",  "mobile-angular-ui"]);

//routing
app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider, $scope) {
    $routeProvider.when('/Home', {
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
        templateUrl: "templates/confirm-data.html",
        controller: "userdataCtrl",
        resolve: function(){
            $scope.filledBus = $scope.persoon.adres.bus != "";
            $scope.filledEmail = $scope.persoon.email != "";
            $scope.filledTel = $scope.persoon.telefoon != "";

        }
    }).when('/optional', {
        templateUrl: "templates/optional.html"
    }).when('/voltooid', {
        templateUrl: "templates/voltooid.html"
    }).otherwise({redirectTo: "/Home"}); //default route

   //$locationProvider.html5Mode(true);

}]);