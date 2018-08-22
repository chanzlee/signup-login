var accounts = {};

var Account = function (id, pw){
  this.id= id;
  this.pw= pw;
}



$(document).ready(function(){
  $("#create-account").submit(function(event){
    event.preventDefault();
    var createIdInput = $("#input-create-id").val();
    var createPwInput = $("#input-create-pw").val();
    console.log(createIdInput + createPwInput);
  });
});
