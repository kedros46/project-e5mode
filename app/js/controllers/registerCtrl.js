/**
 * Created by brecht on 10/03/2016.
 */

app.controller('registerCtrl', function ($scope, $http, $location){
    $scope.persoon = {
        voornaam: "brecht",
        achternaam: "dhondt",
        adres: {
            straat: "hoekestraat",
            huisnr: 114,
            bus: "",
            postcode: 8300,
            gemeente: "Knokke-heist"
        },
        geslacht: "Man",
        gebooortedatum: new Date(),
        email: "brecht46@hotmal.com",
        telefoon: 0479099474,

        partners: true,
        e5acties: true
    };

    $scope.numberformat = ""
    $scope.dateformat = "dd/MM/yy";
    $scope.filledBus = true;
    $scope.filledEmail = true;
    $scope.filledTel = true;


    $scope.editing = false;

    $scope.initialPerson = angular.copy($scope.persoon);

    $scope.formprogress = {
        name: "",
        address: "",
        date: "",
        email: "",
        action: function(form, link){ this[form] = " fa fa-check "; $scope.goTo(link);}
    };
    $scope.initialForm = angular.copy($scope.formprogress);

    $scope.progress = {
        btn: "btn-primary",
        text: "Verder",
        link: "#/optional",
        update: function(){
            console.log("updating");
            $scope.progress.btn = "btn-success";
            $scope.progress.text = "Voltooien";
            $scope.progress.link = "#/voltooid";
            $scope.progress.update = $scope.maakNewPersoon;
        }
    };

    $scope.intialProgress = angular.copy($scope.progress);

    $scope.print = function(){
        console.log($scope.formprogress);
    };

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
        $scope.progress = angular.copy($scope.intialProgress);
        $scope.formprogress = angular.copy($scope.initialForm);

        location.href = "#/Home";
    };


    $scope.httpResult = {
        loading: true,
        message: "",
        result: "",
        response: "",
        action: function(){}
    };
    $scope.initialHttp =angular.copy($scope.httpResult);

    $scope.maakNewPersoon = function(){
        //show loader
        $scope.httpResult.message = "Sending Data...";
        $scope.httpResult.loading = true;

        // ~ $ajax call
        $http({
            method: "POST",
            url: "http://192.168.112.100:10021/web/services/AdresGUI?wsdl/",
            data: $scope.persoon,
            timeout: 5000
        }).then(function done(response){ //done
            console.log(response);
            $scope.httpResult.message = "Thank You For Subscribing!";
            $scope.httpResult.result = true;
            $scope.httpResult.response = "";
            $scope.httpResult.action = function(){
                $scope.reset();
                angular.element(document).find("div").eq(0).removeClass("success")
            };
            angular.element(document).find("div").eq(0).addClass("success");
        }, function error(response){ //fail
            console.log(response);
            $scope.httpResult.message = "Something went wrong...";
            $scope.httpResult.result = false;
            $scope.httpResult.response = "";
            $scope.httpResult.action = function(){
                    $scope.goTo('#/register');
                    angular.element(document).find("div").eq(0).removeClass("fail");
            };
            angular.element(document).find("div").eq(0).addClass("fail");
        }).finally(function(){
            location.href = "#/voltooid";
            $scope.httpResult.loading = false;
        });
    };
});