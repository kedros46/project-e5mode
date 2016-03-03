/**
 * Created by brecht on 25/02/2016.
 */

$(function(){
   console.log("ready");

    $("input").change(function(){
        console.log($(this).val());
    });

    $(".userinfo").submit(confirmuserinfo);
    $("#gegevens").bind("click", "h2, p", changeInput)
});


function confirmuserinfo() {
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
        geboortedatum: $("#geboortedatum").val()
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
    //later
}