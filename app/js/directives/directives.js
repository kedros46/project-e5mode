/**
 * Created by brecht on 10/03/2016.
 */
app.directive("editable", function(){
    return {
        restrict: 'E',
        templateUrl: "js/template/editable.html",
        transclude: true,
        scope: { 'edit': '&onclick'}
    }
})
.directive('mcheckbox', function() {
    return {
        restrict: 'E',
        replace: true,
        require: 'ngModel',
        templateUrl: "js/template/mcheckbox.html",
        link: function(scope, element, attrs, ngModel) {
            var checkboxSpan = element.find('span').eq(2);
            ngModel.$render = function() {
                if (ngModel.$viewValue) {
                    checkboxSpan.removeClass('ui-icon-checkbox-off');
                    checkboxSpan.addClass('ui-icon-checkbox-on');
                } else {
                    checkboxSpan.removeClass('ui-icon-checkbox-on');
                    checkboxSpan.addClass('ui-icon-checkbox-off');
                }
            }
            element.bind('click', function() {
                scope.$apply(function(){
                    ngModel.$setViewValue(!ngModel.$viewValue);
                    ngModel.$render();
                });
            });
        },
        scope: { title: 'accessor' }
    }
});
