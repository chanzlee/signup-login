accounts = {};

var Account = function (id, pw){
  this.id= id;
  this.pw= pw;
  this.balance = 100;
}

Account.prototype.validate= function(){
  if(this.id in accounts){
    if(this.pw === accounts[this.id].pw){
      return true;
    } else {
      return false;
    }
  } else{
    return false;
  }
}

//Just for preventing users to be able to log-out.
var infinityWar= function (){
  for (i=1; i<14,000,605; i++){
    confirm("Dr. Strange watching "+i+" out of 14000605 timelines...");
  }
  alert("We are in the end-game now")
}

// Front-end/////////////////////////
$(document).ready(function(){
  $("#create-account").submit(function(event){
    event.preventDefault();
    var createIdInput = $("#input-create-id").val();
    var createPwInput = $("#input-create-pw").val();
    // create new Account object with given inputs
    var accountInstance = new Account(createIdInput,createPwInput);
    if(accountInstance.validate()){
      alert("ID is already in use");
    } else {
      alert("Sign Up Successfully");
      accounts[accountInstance.id]=accountInstance;
      $("#login-link").trigger("click");
    $("#create-account")[0].reset();
    }
  });

  $("#login-account").submit(function(event){
    event.preventDefault();
    var idInput = $("#input-login-id").val();
    var pwInput = $("#input-login-pw").val();
    var accountInstance = new Account(idInput,pwInput);

    if(accountInstance.validate()){
      currentlyLogIn = accountInstance;
      // currentlyLogIn will be used later on.
      alert("Log in successfully")
      alert("Welcome to Infinity War")
      $(".hidden").show();
      setTimeout(function() { infinityWar(); }, 1000);
    } else {
      alert("ID/Password does not match our records.")
    }

    $("#login-account")[0].reset();
  });

  $("#login-link").click(function(){
    $("div.login").toggle();
    $("div.signup").toggle();
  });

  $("#signup-link").click(function(){
    $("div.signup").toggle();
    $("div.login").toggle();
  });
});
