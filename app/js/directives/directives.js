/**
 * Created by brecht on 10/03/2016.
 */

app.directive("editable", function($timeout){
    return {
        restrict: 'E',
        templateUrl: "js/template/editable.html",
        scope: {
            model: "=",
            required: "@",
            type: "@"
        },
        link: function(scope, element, attrs) {
            scope.editing = false;

            if(attrs.model == "persoon.gebooortedatum"){
                element.find("span span").attr("data-ng-bind", attrs.model + "| date: 'dd/MM/yy'")
            }

            scope.blurring = function(){
                //scope.$watch(function(){return ctrl.$valid; }, function(){
                //    if(attrs.required){
                        scope.editing = false;
                //    }
                //});
            };

            scope.onClick = function(){
                if(attrs.model != "persoon.geslacht") {
                    scope.editing = true;
                    $timeout(function () { //flushes pending actions.
                        element.find("input")[0].focus();
                    });
                }else{
                    //editor disabled for Gender
                    //change gender between "Man" and "Vrouw"
                }
            };

            scope.onKeyDown = function ($event) {
                if($event.keyCode == 13){
                    scope.blurring();
                }
            }

        }
    }
});

//TODO
//app.directive("mradio", function(){
//    return{
//        templateUrl: "",
//        restrict: "AE",
//        transclude: true,
//        scope: {
//            name: "@",
//            value: "@",
//            model: "=",
//            required: "@"
//        },
//        link: function(scope, element, attrs){
//
//        }
//    }
//});
// .directive("mcheckbox", function(){
//
//});
