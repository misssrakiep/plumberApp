$(document).ready(function() {
  var regBtn = document.querySelector('.regBtn');
  console.log(regBtn);
    regBtn.addEventListener('click', function() {

      var special = document.querySelector('.special');
      var fullName = document.querySelector('.fullName');
    $.ajax({
      type: "POST",
      url: "https://plumber-app-api.herokuapp.com/api/plumbers",
      dataType: "json",
      success: function(plumbers) {
        alert('You have successfully registered! Thank you!')
        console.log(plumbers);
      }
    })
  })
}) //END
