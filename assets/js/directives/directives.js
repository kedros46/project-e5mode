/**
 * Created by brecht on 10/03/2016.
 */
app.directive("editable", function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "assets/js/template/editable.html",
        transclude: true,
        scope: { }
    }
});

app.directive("mpage", function(){ //porbably doesnt work correctly
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        scope:{ },
        template: "<div data-role='page' ng-transclude></div>"
    }
});
app.directive("mdialog", function(){
    return {
        restrict: 'E',
        template: "<div data-role='dialog' ng-transclude></div>",
        scope: {},
        transclude: true,
        replace: true
    }
})