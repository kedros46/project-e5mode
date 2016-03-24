/**
 * Created by brecht on 10/03/2016.
 */

app.controller('registerCtrl', function ($scope, $http, $location){
    $scope.persoon = {
        voornaam: "",
        achternaam: "",
        adres: {
            straat: "",
            huisnr: "",
            bus: "",
            postcode: "",
            gemeente: ""
        },
        geslacht: "Man",
        gebooortedatum: new Date(),
        email: "",
        telefoon: "",

        partners: true,
        e5acties: true
    };
    $scope.initialPerson = angular.copy($scope.persoon);


    $scope.progress = {
        name: "",
        adres: "",
        date: "",
        email: "",
        check: function(form){progress[form] = "check";}
    };

    $scope.httpResult = {
        message: "",
        result: "",
        response: "",
        action: ""
    };

    $scope.format = "dd/MM/yy";
    $scope.filledBus = false;
    $scope.filledEmail = false;
    $scope.filledTel = false;
    $scope.voltooien = false;
    $scope.atHome = true;



    $scope.dialogEdit = {
        label: "label",
        type: "text",
        model: ""
    };

    $scope.editInput = function($event, attrs){
        var target = $event.target;
        $scope.dialogEdit.label = attrs[attrs.length -1];

        $scope.dialogEdit.model = "persoon";
        attrs.forEach( function(element){
            $scope.dialogEdit.model += "." + element;
        });

        location.href = "#changeInput";
    };

    $scope.goTo = function(link){
        console.log("going to " + link);
        location.href = link;
    };

    $scope.reset = function() {
        $scope.persoon = angular.copy($scope.initialPerson);
        location.href = "#/Home";
    };

    $scope.maakNewPersoon = function(){
        console.log("sending...");
        //show loader

        // ~ $ajax call
        $http({
            method: "POST",
            url: "http://192.168.112.100:10021/web/services/AdresGUI?wsdl/",
            data: $scope.persoon,
            timeout: 5000
        }).then(function done(response){ //done
            console.log(response);
            angular.element(document).find("body").addClass("succes")
            $scope.confirmMessage = "Succes!";
            $scope.httpResult.action = "reset()";
        }, function error(response){ //fail
            console.log(response);
            $scope.confirmMessage = "Something went wrong...";
            $scope.httpResult.action = "goTo('#/register')";
            angular.element(document).find("body").addClass("fail");
        }).finally(function(){
            location.href = "#/voltooid";
        })
    };
});