//Business Logic
 // var question1 = $("input:radio[name='quest1']:checked").val();
//   var question2 = $("input:radio[name='quest2']:checked").val();
// var question3 = $("input:radio[name='quest3']:checked").val();
var answer1 = "";
var answer2 = "";
var answer3 = "";
var answer4 = "";
var answer5 = "";
function findAnswers(questionNumber, answerNumber) {

  if (questionNumber === 1) {
    if(answerNumber === "ob") {
      alert("Correct");
    }
    else if(answerNumber === "oa" || answerNumber === "oc") {
      alert(" Sorry! Wrong answer");
    }
  }
  if (questionNumber === 2) {
    if(answerNumber === "2b") {
      alert("Correct");
    }
    else if(answerNumber === "2a") {
      alert("1. Sorry! Wrong answer");
    }
  }
  if (questionNumber === 3) {
    if(answerNumber === "3b") {
      alert("Correct");
    }
    else if(answerNumber === "3a" || answerNumber === "3c") {
      alert("1. Sorry! Wrong answer");
    }
  }
  if (questionNumber === 4) {
    if(answerNumber === "4c") {
      alert("Correct");
    }
    else if(answerNumber === "4b" || answerNumber === "4a") {
      alert("1. Sorry! Wrong answer");
    }
  }
  if (questionNumber === 5) {
    if(answerNumber === "5a") {
      alert("Correct");
    }
    else if(answerNumber === "5b" || answerNumber === "5c") {
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
    answer2 = $("input:radio[name='quest2']:checked").val();
     findAnswers(2, answer2);
    // $("#introPage").hide();
    // $("#questionOne").hide();
     $("#questionTwo").hide( "slide", {direction: "left"}, 200);
    $("#questionThree").delay(250).show( "slide", {direction: "right"}, 200);
  });

  $("#questionThreeForm").submit(function(event) {
    event.preventDefault();
    answer3 = $("input:radio[name='quest3']:checked").val();
     findAnswers(3, answer3);
    // $("#introPage").hide();
    // $("#questionOne").hide();
    // $("#questionTwo").hide();
    $("#questionThree").hide( "slide", {direction: "left"}, 200);
    $("#questionFour").delay(250).show( "slide", {direction: "right"}, 200);

});
$("#questionFourForm").submit(function(event) {
  event.preventDefault();
  answer4 = $("input:radio[name='quest4']:checked").val();
   findAnswers(4, answer4);
  // $("#introPage").hide();
  // $("#questionOne").hide();
  // $("#questionTwo").hide();
  // $("#questionThree").hide();
  // $("#questionTwo").hide();
  $("#questionFour").hide( "slide", {direction: "left"}, 200);
  $("#questionFive").delay(250).show( "slide", {direction: "right"}, 200);

});
$("#questionFiveForm").submit(function(event) {
  event.preventDefault();
  answer5 = $("input:radio[name='quest5']:checked").val();
   findAnswers(5, answer5);
  // $("#introPage").hide();
  // $("#questionOne").hide();
  // $("#questionTwo").hide();
  // $("#questionThree").hide();
  // $("#questionFour").hide();
  $("#questionFive").hide( "slide", {direction: "left"}, 200);
  $("#thankyou").delay(250).show( "slide", {direction: "right"}, 200);
  // $('#ending').effect( 'bounce', { times: 3 }, 'slow');
});

$("#thankyouForm").submit(function(event) {
  event.preventDefault();

  // $('#ending').effect( 'bounce', { times: 3 }, 'slow');
  $('#ending').click(function() {
    // alert('alert!');
    $(this).effect( 'bounce', { times: 3 }, 'slow');

  });
  // $("#introPage").hide();
  // $("#questionOne").hide();
  // $("#questionTwo").hide();
  // $("#questionThree").hide();
  $("#thankyou").hide( "slide", {direction: "left"}, 200);
  $("#answers").delay(250).show( "slide", {direction: "right"}, 200);
});
$("#answersForm").submit(function(event) {
  event.preventDefault();
  $("#introPage").delay(250).show( "slide", {direction: "right"}, 200);
  // $("#questionOne").hide();
  // $("#questionTwo").hide();
  // $("#questionThree").hide();
  // $("#thankyou").hide();
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
