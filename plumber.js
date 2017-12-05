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
  $.ajax({
    type: "POST",
    url: "https://plumber-app-api.herokuapp.com/api/plumbers/" + id.value +"/slot/" + slot.value + "/day/" + day.value,
    dataType: "json",
    success: function(plumbers) {
      document.querySelector('.plumberCard').innerHTML = plumberTemp({
        plumbers: plumbers
      })
      alert('Your booking has been processed!')
      console.log('Plumber booked');
      location.reload();
    }
  })
});






}) //END
