$(document).ready(function() {
  var loginBtn = document.querySelector('.loginBtn');
  var plumberText = document.querySelector('.plumberTemp').innerHTML;
  var plumberTemp = Handlebars.compile(plumberText)

  loginBtn.addEventListener('click', function() {
    console.log('Here!');
    var plumberText = document.querySelector('.plumberTemp').innerHTML;
    var plumberTemp = Handlebars.compile(plumberText)
    var login = document.querySelector('.login').value;
    $.ajax({
      type: "GET",
      url: "https://plumber-app-api.herokuapp.com/api/plumbers/" + login,
      dataType: "json",
      success: function(plumbers) {
        if(plumbers){
          document.querySelector('.bookingCard').innerHTML = plumberTemp({
            plumbers: plumbers
          });
          console.log(plumbers);
          }
      }
    });
  })

}) //END
