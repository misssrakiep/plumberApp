$(document).ready(function() {
  console.log('ready');
  var regBtn = document.querySelector('.regBtn');
    regBtn.addEventListener('click', function() {
      var fullName = document.querySelector('.fullName');
    $.ajax({
      type: "POST",
      url: "https://plumber-app-api.herokuapp.com/api/plumbers",
      dataType: "json",
      data: {
        fullName: fullName.value
      },
      success: function(plumber) {
        console.log(plumber);
alert('You are now a registered plumber!')
        location.reload();
      },
      error: function() {
        console.log("something went wrong");
      }
    })
  })
}) //END
