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
      alert("G was pressed!");
    }
    });

});
