/**
 * Created by brecht on 23/03/2016.
 */
app.controller("userdataCtrl", function ($scope, $http, $location) {
    $scope.progress = {
        btn: "btn-primary",
        text: "Verder",
        action: "goTo('#/optional')",
        onClick: "data-ng-click='" + $scope.action + "'"
    }

});