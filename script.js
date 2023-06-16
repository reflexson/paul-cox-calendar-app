// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
    
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

$(function () {


// set currect date at the top
var time = dayjs().format('dddd[, ]MMMM DD');
$('#currentDay').text(time);

  // set current hour number (military time) for the .each loop
 var currentHour = Number(dayjs().format('H'));

//  Gather ids that are children of allHours ID and make an array with the div.id of each index

//  divIds = $.map($('#allHours > div'), div => div.id);

// or select all class time-block and create array with the div.id of each index

 divIds = $.map($('.time-block'), div => div.id);

 console.log(divIds);


// Vanilla Method
// var parentdiv = document.getElementById("allHours")
// var divIds = parentdiv.querySelectorAll(":scope > .time-block");
// var divArray = Array.from(divIds);
// console.log(divArray); 
// var ids = divArray.map(div => div.id);


 
// .each loop to set color of children divs. Convert string name in array 
// to only number string, then change string to number value.
// Use JQuery to use array name as the div name(s) to change color with class addition.

 $( divIds ).each( function( i ) {
  if ( (Number(this.replace(/\D/g, "")) === currentHour ) ){
    jQuery(`#${this}`).addClass('present');
  } 
  else if((Number(this.replace(/\D/g, "")) > currentHour )){
    jQuery(`#${this}`).addClass('future');
  }
  else if((Number(this.replace(/\D/g, "")) < currentHour )){
    jQuery(`#${this}`).addClass('past');
  }
 })





const saveButtons = document.querySelectorAll('.saveBtn');

$( saveButtons ).each( function( i ) {
  $(saveButtons[i]).click( function(){
    saveEvent = this.parentElement.children[1].value;
    localStorage.setItem(`${this.parentElement.textContent}event`, saveEvent);

  })
})

var descriptionElements = document.querySelectorAll('.description');
$(descriptionElements).each(function(){
  loadEvent =localStorage.getItem(`${this.parentElement.textContent}event`);
  this.value = loadEvent;


})

console.log(saveButtons[1].parentElement.children[1]);

// Array.from(timeBlocksElement).forEach(function(i) {
//   console.log(this);




// });





// $(timeBlocksElement).each(function(i){
// (this).on('click', function (){

  
//   })
// })



});
