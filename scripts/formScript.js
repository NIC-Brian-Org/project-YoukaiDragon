'use strict';

//load form data from local storage
let userName = localStorage.getItem('name');
$('#name').val(userName);
let email = localStorage.getItem('email');
$('#mail').val(email);
let message = localStorage.getItem('message');
$('#message').val(message);
let userEvent = localStorage.getItem('event');
$('#event').val(userEvent)
if(userEvent == 'D&D' || userEvent == 'Commander') {
  let pizza = localStorage.getItem('pizza');
  $('.pizza').css('visibility', 'visible');
  if(pizza == 'true') {
    $('#pizza').prop('checked', true);
  } else {
    $('#pizza').prop('checked', false);
  }
}

setInterval(function(){
  //get all of the form values and save them to local storage
  let userName = $('#name').val();
  localStorage.setItem('name', userName);
  let email = $('#mail').val();
  localStorage.setItem('email', email);
  let message = $('#message').val();
  localStorage.setItem('message', message);
  let userEvent = $('#event').val();
  localStorage.setItem('event', userEvent);
  let pizza = $('#pizza').prop('checked');
  localStorage.setItem('pizza', pizza);
}, 5000); //save form input every 5 seconds

$('#event').change(function () {
  //check if value is one of the pizza night options
  if(this.value == 'D&D' || this.value == 'Commander') {
    $('.pizza').css('visibility', 'visible');
  } else {
    $('.pizza').css('visibility', 'hidden');
    $('#pizza').prop('checked', false);
  }
});