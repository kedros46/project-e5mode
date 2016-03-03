/**
 * Created by brecht on 25/02/2016.
 */

$(function(){
   console.log("ready");

    $(".userinfo").submit(confirmuserinfo);
    $("#confirm").bind("click", function(){
        $(this).hide();
        $("#voltooien").removeClass("hide");
    });
    $("#gegevens>h2, #gegevens>p").bind("click", changeInput);
});


function confirmuserinfo() {
    window.location.href = "#confirm-user";
    var person = {
        voornaam: $("#naam").val(),
        achternaam: $("#achternaam").val(),
        adres: {
            straat: $("#straat").val(),
            huisnr: $("#huisnummer").val(),
            postcode: $("#postcode").val(),
            gemeente: $("#gemeente").val()
        },
        geslacht: $("input[type='radio']:checked").data("geslacht"),
        geboortedatum: $("#geboortedatum").val(),
        email: $("#email").val(),
        telefoon: $("#telefon").val()
    };

    console.log(person);
    /*
    $.ajax({
        url: $(this).attr('action'),
        type: "POST",
        dataType: "JSON",
        data: person
    }).done(function(response){
        console.log(response);
    }).fail(function(xhr, message, error){
        console.log(message, error);
        //generate the fail screen
    });
    */


}


function changeInput() {
    console.log($(this));
    var info = $(this).data("info");
    var value = $(this).text();

    console.log(info + " - " + value);

    var page = $("#changeInput");
    page.find("label").text(info);
    page.find("input").attr("type", typeof info).attr("name", info).val(value);
    window.location.href = "#changeInput";
}