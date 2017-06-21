//Business Logic

//User Interface Logic
$(document).ready(function() {
 $("form#quizForm").submit(function(event) {
   event.preventDefault();
   //Get the input from the user
  var question1 = $("input:radio[name='quest1']:checked").val();
   var question2 = $("input:radio[name='quest2']:checked").val();
   var question3 = $("input:radio[name='quest3']:checked").val();
   if(question1 === "oa")
   {
     $("#para").text("1. Correct answer");
   }
   else if(question1 === "ob" || question2 === "oc")
   {
     $("#para").append("1. Sorry! Wrong answer");
   }
   if(question2 === "2a" || question2 === "2c")
   {
      $("#para").append("2. Sorry! Wrong answer");
   }
   else if(question2 === "2b")
   {
     $("#para").text("2. Correct answer");
   }
   if(question3 === "3a" || question3 === "3b")
   {
      $("#para").text("3. Sorry! Wrong answer");
   }
   else if(question3 === "3c")
   {
     $("#para").text("3. Correct answer");
   }
 });
});
