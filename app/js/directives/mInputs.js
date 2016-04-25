/**
 * Created by brecht on 14/04/2016.
 */
app.directive("mcheckbox", function(){
   return {
       scope: {
           model: "=",
           id: "@"
       },
       restrict: "AE",
       template: "<div></div>",
       link: function(scope, element, attrs){

       }
   }
});

//<div class="mcheck">
//<input type="checkbox" id="check-partner"  data-ng-model="persoon.partners">
//<label for="check-partner">Mijn gegevens mogen gebruikt worden voor partner aanbiedingen</label>
//</div>