/**
 * Created by brecht on 10/03/2016.
 */

app.directive("editable", function($timeout){
    return  {
        restrict: 'E',
        templateUrl: "js/template/editable.html",
        scope: {
            model: "=",
            required: "@",
            type: "@"
        },

        link: function (scope, element, attrs) {
            scope.editing = false;

            scope.blurring = function () {
                   scope.editing = false;
            };

            scope.onClick = function () {
                if (attrs.model != "persoon.geslacht") {
                    scope.editing = true;
                    $timeout(function () { //flushes pending actions.
                        element.find("input")[0].focus();
                    });
                } else {
                    //editor disabled for Gender
                    //change gender between "Man" and "Vrouw"
                }
            };

            scope.onKeyDown = function ($event) {
                if ($event.keyCode == 13) {
                    scope.blurring();
                }
            };
        }
    };
});

//TODO
//SHAME!
app.directive("dateEdit", function($timeout){
   return {
       restrict: 'E',
       templateUrl: "js/template/dateEdit.html", //SHAME!
       scope: {
           model: "=",
           required: "@",
           type: "@"
       },
       link: function (scope, element, attrs) {
           scope.editing = false;

           element.addClass()
           scope.blurring = function () {
               scope.editing = false;
           };

           scope.onClick = function () {
               if (attrs.model != "persoon.geslacht") {
                   scope.editing = true;
                   $timeout(function () { //flushes pending actions.
                       element.find("input")[0].focus();
                   });
               } else {
                   //editor disabled for Gender
                   //change gender between "Man" and "Vrouw"
               }
           };

           scope.onKeyDown = function ($event) {
               if ($event.keyCode == 13) {
                   scope.blurring();
               }
           };
       }
   }
});

