$(document).ready(function() {
  console.log('ready');
  var regBtn = document.querySelector('.regBtn');
    regBtn.addEventListener('click', function() {
      var fullName = document.querySelector('.fullName');
    $.ajax({
      type: "POST",
      url: "https://plumber-app-api.herokuapp.com/api/plumbers",
      dataType: "application/json",
      data: {
        fullName: fullName.value
      },
      success: function() {
        alert('You have successfully registered! Thank you!')
        console.log(arguments);
        location.reload();
      }
    })
  })
}) //END
