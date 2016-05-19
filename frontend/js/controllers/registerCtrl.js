/**
 * Created by brecht on 10/03/2016.
 */

app.controller('registerCtrl', function ($scope, $http) {
    $scope.dateformat = "dd/MM/yy";

    $scope.persoon = {
        kaartnummer: "",
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

    $scope.parseDate = function(){
        var month = $scope.persoon.gebooortedatum.getMonth().toString().length == 1 ? "0"+($scope.persoon.gebooortedatum.getMonth()+1) : $scope.persoon.gebooortedatum.getMonth()+1;
        var date = $scope.persoon.gebooortedatum.getDate().toString().length == 1 ? "0"+$scope.persoon.gebooortedatum.getDate(): $scope.persoon.gebooortedatum.getDate();
        return(parseInt($scope.persoon.gebooortedatum.getFullYear() + "" + month + date));
    };

    $scope.formprogress = {
        name: "",
        address: "",
        date: "",
        email: "",
        action: function (form, link) {
            this[form] = " fa fa-check ";
            $scope.goTo(link);
        }
    };
    $scope.initialForm = angular.copy($scope.formprogress);

    $scope.progress = {
        btn: "btn-primary",
        text: "Verder",
        link: "#/optional",
        update: function () {
            $scope.progress.btn = "btn-success";
            $scope.progress.text = "Voltooien";
            $scope.progress.link = "#/voltooid";
            $scope.progress.update = $scope.maakNewPersoon;
        }
    };
    $scope.intialProgress = angular.copy($scope.progress);

    /*/ ======= FUNCTIONS ========= /*/

    $scope.goTo = function (link) {
        location.href = link;
    };

    $scope.reset = function () {
        $scope.persoon = angular.copy($scope.initialPerson);
        $scope.progress = angular.copy($scope.intialProgress);
        $scope.formprogress = angular.copy($scope.initialForm);

        angular.element(document).find("div").eq(0).removeClass("success fail")
        location.href = "#/Home";
    };


    $scope.ajaxResult = {
        loading: true,
        message: "Sending Data...",
        result: "",
        response: "",
        action: function () {
        }
    };
    $scope.initialHttp = angular.copy($scope.ajaxResult);


    $scope.maakNewPersoon = function () {
        //show loader
        $scope.ajaxResult.message = "Sending Data...";
        $scope.ajaxResult.loading = true;

        var persoon = $scope.persoon;
        var date = $scope.parseDate();
        var aanspreekcode = (persoon.geslacht == "Man") ? 3 : 2; //3 = man ; 2 = vrouw;
        var optout = persoon.e5acties ? 0 : 1;
        var nietpartner = persoon.partners ? 0 : 1;

        // ~ $ajax call
        $.ajax({
            method: 'GET',
            url: '../backend/index.php',
            dataType: 'JSON',
            data: {
                taalcode: "N",
                achternaam: persoon.achternaam,
                voornaam: persoon.voornaam,
                postlandcode: "B",
                postcode: persoon.adres.postcode,
                straat: persoon.adres.straat,
                busnummer: persoon.adres.bus,
                huisnummer: persoon.adres.huisnr,
                gemeente: persoon.adres.gemeente,
                geboortedatum: date,
                email: persoon.email,
                telefoonnummer: "" + persoon.telefoon,
                kaartnummer: persoon.kaartnummer,
                aanspreekcode: aanspreekcode,
                optout: optout,
                gegevensnietaanderden: nietpartner
            },
            timeout: 5000
        }).done(function (data) {
            console.log("Data:", data);
            console.log("Fout:", data["FOUT"]);
            if (data["FOUT"]["BERICHT"] == "" && data["RESPONSE"]["KAARTNUMMER"] !=0)  {
                $scope.showSucces();
            }
            else {
                var message = data["FOUT"]["BERICHT"] != "" ? data["FOUT"]["BERICHT"] : "Er is een onbekende fout opgetreden\nControleer of uw postcode en gemeente overeen komen";
                $scope.showError(message);
            }
        }).fail(function (param, param2, param3) {
            console.log(param, param2, param3);
            $scope.showError("Connectie heeft gefaald");
        }).always(function () {
            location.href = "#/voltooid";
            $scope.ajaxResult.loading = false;
        });
    };

    $scope.showError = function (message) {
        $scope.ajaxResult.message = "Something went wrong...";
        $scope.ajaxResult.result = false;
        $scope.ajaxResult.response = message;
        $scope.ajaxResult.action = function () {
            $scope.goTo('#/register');
            angular.element(document).find("div").eq(0).removeClass("fail");
        };
        angular.element(document).find("div").eq(0).addClass("fail");
    };

    $scope.showSucces = function () {
        $scope.ajaxResult.message = "Thank You For Subscribing!";
        $scope.ajaxResult.result = true;
        $scope.ajaxResult.response = "";
        $scope.ajaxResult.action = function () {
            $scope.reset();
            angular.element(document).find("div").eq(0).removeClass("success")
        };

        angular.element(document).find("div").eq(0).addClass("success");
    };
});
