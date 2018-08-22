accounts = {};

var Account = function (id, pw){
  this.id= id;
  this.pw= pw;
}

$(document).ready(function(){
  $("#create-account").submit(function(event){
    event.preventDefault();
    var createIdInput = $("#input-create-id").val();
    var createPwInput = $("#input-create-pw").val();
    // create new Account object with given inputs
    var accountInstance = new Account(createIdInput,createPwInput);
    accounts[accountInstance.id]=accountInstance;
    $("#create-account")[0].reset();
  });

  $("#login-account").submit(function(event){
    event.preventDefault();
    var idInput = $("#input-create-id").val();
    var pwInput = $("#input-create-pw").val();

    // credential validation function should be added here

    $("#create-account")[0].reset();
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
