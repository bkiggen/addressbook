$(document).ready(function(){
  $("form#newContact").submit(function(event){
    event.preventDefault();
    var firstName = $("#first").val();
    var lastName = $("#last").val();
    var phone = $("#phone").val();
    var email = $("#email").val();

    $("#firstNameCol").append('<div class="sizer"><p>' + '<span class="bold">' + firstName + '</span>' + '<br/>' + lastName + '<br/>' + phone + '<br/>' + email + '</p></div>');

  });






});
