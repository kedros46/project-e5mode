/**
 * Created by brecht on 10/03/2016.
 */
app.directive("editable", function(){
    return {
        restrict: 'E',
        templateUrl: "assets/js/template/editable.html",
        transclude: true,
        scope: { 'edit': '&onclick'}
    }
});

app.directive("navbar", function(){ //porbably doesnt work correctly
    return {
        restrict: "E",
        scope:{ },
        templateurl: "assets/js/template/navbar.html"
    }
});

//directive('ngBindModel',function($compile){
//    return{
//        compile:function(tEl,tAtr){
//            tEl[0].removeAttribute('ng-bind-model')
//            return function(scope){
//                tEl[0].setAttribute('ng-model',scope.$eval(tAtr.ngBindModel))
//                $compile(tEl[0])(scope)
//                console.info('new compiled element:',tEl[0])
//            }
//        }
//    }
//});