$(document).ready(function() {
  console.log('ready');
  var regBtn = document.querySelector('.regBtn');
    regBtn.addEventListener('click', function() {
      var special = document.querySelector('.special');
      var fullName = document.querySelector('.fullName');
    $.ajax({
      type: "POST",
      url: "https://plumber-app-api.herokuapp.com/api/plumbers",
      dataType: "application/json",
      data: {
        fullName: fullName.value
      },
      success: function(plumbers) {
        alert('You have successfully registered! Thank you!')
        console.log(plumbers);
        var initDocument = $.extend(true, {}, document);
        location.reload();
      }
    })
  })
}) //END
