accounts = {};

var Account = function (id, pw){
  this.id= id;
  this.pw= pw;
  this.balance = 100;
}

Account.prototype.validate= function(){
  console.log(this.pw);
  console.log(this.id);
  console.log(this.id in accounts);
  if(this.id in accounts){
    console.log(accounts[this.id].pw);
    if(this.pw === accounts[this.id].pw){
      return true;
    } else {
      return false;
    }
  } else{
    return false;
  }
}

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
      alert("Sign Up Successful");
      accounts[accountInstance.id]=accountInstance;
      console.log(accounts);
    $("#create-account")[0].reset();
    }
  });

  $("#login-account").submit(function(event){
    event.preventDefault();
    var idInput = $("#input-login-id").val();
    var pwInput = $("#input-login-pw").val();
    console.log(idInput);
    console.log(pwInput);
    var accountInstance = new Account(idInput,pwInput);
    console.log(accounts);
    console.log(accountInstance);
    if(accountInstance.validate()){
      currentlyLogIn = accountInstance;
      // currentlyLogIn will be used later on
      alert("Log In Successful")
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
