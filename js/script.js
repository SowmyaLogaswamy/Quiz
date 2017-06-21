//Business Logic
 // var question1 = $("input:radio[name='quest1']:checked").val();
//   var question2 = $("input:radio[name='quest2']:checked").val();
// var question3 = $("input:radio[name='quest3']:checked").val();
var answer1 = "";
var answer2 = "";

function findAnswers(questionNumber, answerNumber) {
  
  if (questionNumber === 1) {
    if(answerNumber === "oa") {
      alert("Correct");
    }
    else if(answerNumber === "ob" || answerNumber === "oc") {
      alert("1. Sorry! Wrong answer");
    }
  }
  if (questionNumber === 2) {
    if(answerNumber === "2b") {
      alert("Correct");
    }
    else if(answerNumber === "2a" || answerNumber === "2c") {
      alert("1. Sorry! Wrong answer");
    }
  }

  //
  // if(question1 === "oa")
  // {
  //   alert("Correct");
  // }
  // else if(question1 === "ob" || question1 === "oc")
  // {
  //   alert("1. Sorry! Wrong answer");
  // }
  // if(question2 === "2a" || question2 === "2c")
  // {
  //    alert("2. Sorry! Wrong answer");
  // }
  // else if(question2 === "2b")
  // {
  //   alert("2. Correct answer");
  // }
  // if(question3 === "3a" || question3 === "3b")
  // {
  //    $("#para").text("3. Sorry! Wrong answer");
  // }
  // else if(question3 === "3c")
  // {
  //   $("#para").text("3. Correct answer");
  // }
}
//User Interface Logic
$(document).ready(function() {

  //Get the input from the user
    // var question1 = $("input:radio[name='quest1']:checked").val();
    // var question2 = $("input:radio[name='quest2']:checked").val();
    // var question3 = $("input:radio[name='quest3']:checked").val();

  $("#startButton").click(function() {
    $("#introPage").hide();
    //$("form#questionOneForm").show();
    $("#questionOne").fadeIn(700);

  });

  $("#questionOneForm").submit(function(event) {
    event.preventDefault();
    answer1 = $("input:radio[name='quest1']:checked").val();
     findAnswers(1, answer1);
    $("#introPage").hide();
    // var question1 = $("input:radio[name='quest1']:checked").val();


    $("#questionOne").hide( "slide", {direction: "left"}, 200);
    $("#questionTwo").delay(250).show( "slide", {direction: "right"}, 200);


  });

  $("#questionTwoForm").submit(function(event) {
    event.preventDefault();
    $("#introPage").hide();
    $("#questionOne").hide();
     $("#questionTwo").hide( "slide", {direction: "left"}, 200);
    $("#questionThree").delay(250).show( "slide", {direction: "right"}, 200);
  });

  $("#questionThreeForm").submit(function(event) {
    event.preventDefault();
    $("#introPage").hide();
    $("#questionOne").hide();
    $("#questionTwo").hide();
    $("#questionThree").hide( "slide", {direction: "left"}, 200);
    $("#thankyou").delay(250).show( "slide", {direction: "right"}, 200);

});
$("#thankyouForm").submit(function(event) {
  event.preventDefault();
  $("#introPage").hide();
  $("#questionOne").hide();
  $("#questionTwo").hide();
  $("#questionThree").hide();
  $("#thankyou").hide( "slide", {direction: "left"}, 200);
  $("#answers").delay(250).show( "slide", {direction: "right"}, 200);
});
$("#answersForm").submit(function(event) {
  event.preventDefault();
  $("#introPage").delay(250).show( "slide", {direction: "right"}, 200);
  $("#questionOne").hide();
  $("#questionTwo").hide();
  $("#questionThree").hide();
  $("#thankyou").hide();
  $("#answers").hide( "slide", {direction: "left"}, 200);
});
});

//  $("form#quizForm").submit(function(event) {
//    event.preventDefault();
//    //Get the input from the user
//   var question1 = $("input:radio[name='quest1']:checked").val();
//    var question2 = $("input:radio[name='quest2']:checked").val();
//    var question3 = $("input:radio[name='quest3']:checked").val();
//    if(question1 === "oa")
//    {
//      $("#para").text("1. Correct answer");
//    }
//    else if(question1 === "ob" || question2 === "oc")
//    {
//      $("#para").append("1. Sorry! Wrong answer");
//    }
//    if(question2 === "2a" || question2 === "2c")
//    {
//       $("#para").append("2. Sorry! Wrong answer");
//    }
//    else if(question2 === "2b")
//    {
//      $("#para").text("2. Correct answer");
//    }
//    if(question3 === "3a" || question3 === "3b")
//    {
//       $("#para").text("3. Sorry! Wrong answer");
//    }
//    else if(question3 === "3c")
//    {
//      $("#para").text("3. Correct answer");
//    }
//  });
// });
