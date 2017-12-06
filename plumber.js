$(document).ready(function() {

  console.log('ready');
  var plumberText = document.querySelector('.plumberTemp').innerHTML;
  var plumberTemp = Handlebars.compile(plumberText)
  //display all plumbers on the home page
  $.ajax({
    type: "GET",
    url: "https://plumber-app-api.herokuapp.com/api/home",
    dataType: "json",
    success: function(plumbers) {
      console.log(plumbers);
      document.querySelector('.plumberCard').innerHTML = plumberTemp({
        plumbers: plumbers
      })
    }
  });


$('.plumberCard').on('click', function(){
  var slot = document.querySelector('.slot');
  var day = document.querySelector('.day');
  var id = document.querySelector('.id');
  var clientName = document.querySelector('.clientName');
  $.ajax({
    type: "POST",
    url: "https://plumber-app-api.herokuapp.com/api/plumbers/" + id.value +"/slot/" + slot.value + "/day/" + day.value + "/client/" + clientName.value,
    dataType: "json",
    data: {
      slot: slot.value,
      day: day.value,
      clientName : clientName.value
    },
    success: function(plumbers) {
      alert('Your booking has been processed!')
      document.querySelector('.plumberCard').innerHTML = plumberTemp({
        plumbers: plumbers
      })
      console.log('Plumber booked');
      location.reload();
    }
  })
});
}) //END
