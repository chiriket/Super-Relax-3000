 $(document).ready(function(){
   function........() {
     var weight = $("input#weight").val();
     var height = $("input#height").val();
     var bmi ="";


     if(weight && height) {
       bmi = Math.round(10 * weight/ Math.pow(height/100, 2))/10
       if (isNaN(bmi) ) bmi = "";
     }
     $("#bmiresult").text(bmi);
     return bmi;
   }
   $("form#bmi").bind("keydown", function (){
     setTimeout(function(){
       showbmi();
     }, 100);
     return true;
   });
   $("form#bmi").bind("change", function(){
     showbmi();
   });
   $("form#bmi").bind("submit", function (){
     showbmi();
     return false;
   });
 });
