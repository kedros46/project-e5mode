/**
 * Created by brecht on 25/02/2016.
 */
$(function(){
   console.log("ready");


    $("#usergebdate").submit(confirmuserinfo)
});


function confirmuserinfo() {
    var person = {
        name: $("#naam").val();
    }
}