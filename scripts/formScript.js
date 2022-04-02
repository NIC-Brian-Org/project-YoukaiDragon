'use strict';

$('#event').change(function () {
  //check if value is one of the pizza night options
  if(this.value == "D&D" || this.value == "Commander") {
    $('.pizza').css("visibility", "visible")
  } else {
    $('.pizza').css("visibility", "hidden")
    $('#pizza').prop("checked", false)
  }
})

