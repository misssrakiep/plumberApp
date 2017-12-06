$(document).ready(function() {
  console.log('ready');
  var regBtn = document.querySelector('.regBtn');
    regBtn.addEventListener('click', function() {
console.log("====");
      var special = document.querySelector('.special');
      var fullName = document.querySelector('.fullName');
      var baseUrl = "https://plumber-app-api.herokuapp.com";
    $.ajax({
      type: "POST",
      url: "http://plumber-app-api.herokuapp.com/api/plumbers",
      dataType: "application/json",
      data: {
        fullName: fullName.value,
        specialise: special.value
      },
      success: function(plumbers) {
        console.log(plumbers);
        alert('You have successfully registered! Thank you!')
      }
    })
  })
}) //END
