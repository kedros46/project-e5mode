/**
 * Created by brecht on 10/03/2016.
 */
app.directive("editable", function(){
    return {
        restrict: 'E',
        templateUrl: "js/template/editable.html",
        transclude: true,
        scope: {
            editing: "=",
            model: "=",
            type: "="
        }
    }
});
