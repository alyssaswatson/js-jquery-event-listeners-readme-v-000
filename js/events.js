//define functions here
function getIt() {
}
function frameIt() {
}
function pressIt() {
}
function submitIt() {
}

$(document).ready(function(){
  $('p').on('click', function(){
   alert('Hey!')
  });

  $('img').addClass("tasty");

  $('input#typing').keydown(function(key) {
    if(key.which === 71) {
      return alert("G was pressed!");
    }
    });

  $('form').submit(function() {
       return alert("Your form is going to be submitted now.");
     });

});
