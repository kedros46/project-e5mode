/**
 * Created by brecht on 10/03/2016.
 */

app.directive("editable", function($timeout){
    return {
        restrict: 'E',
        templateUrl: "js/template/editable.html",
        transclude: true,
        scope: {
            model: "=",
            required: "@",
            type: "@"

        },
        link: function(scope, element, attrs, ctrl) {
            console.log(ctrl);
            scope.editing = false;

            scope.blurring = function(){
                //scope.$watch(function(){return ctrl.$valid; }, function(){
                //    if(attrs.required){
                        scope.editing = false;
                //    }
                //});
            };

            scope.onClick = function(){
                scope.editing = true;
                $timeout(function() { //flushes pending actions.
                    element.find("input")[0].focus();
                });
            };

        }
    }
});

//TODO
//app.directive("mradio", function(){
//A
//}).directive("mcheckbox", function(){
//
//});
