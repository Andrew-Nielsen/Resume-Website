$(document).ready(function(){ //Initialize Document.
  $("#contactForm").submit( function(e){ //click or submit form button.
    e.preventDefault(); //Prevent the page from refreshing.
  //Gather values from the form.
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var number = $('#number').val();
    var email = $('#email').val();
    var comments = $('#comments').val();
//Trigger error if information is not there.
        if (firstName == '' || lastName == '' || number == '' || email=='' || comments == ''){
          alert("Please enter your information");
        }//End if Statement
//insert the data into the insert.php function.
        else {
              $.ajax({
                  url:"php/insert.php",
                  type: "POST",
                  data: {
                    firstName:firstName,
                    lastName:lastName,
                    number:number,
                    email:email,
                    comments:comments
                  },
  //If everything works, send an alert saying it worked and reset the form.
                  success: function(data){
                    alert ("Your information has been entered!");
                    $("form").trigger("reset");
                  } //End Success Function
                }); //End Ajax Call
              } //End else statment
      }); //End function
}); //End Document
