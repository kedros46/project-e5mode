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
        link: function(scope, element, attrs, ctrl) {
            scope.editing = false;

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
