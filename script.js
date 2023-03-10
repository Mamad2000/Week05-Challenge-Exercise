// Store the timeblock hours into variables
var timeblock = $('.time-block');
var rootEl = $('#root');
var hour9am = $('#hour-9'); 
var hour10am = $('#hour-10');
var hour11am = $('#hour-11'); 
var hour12am = $('#hour-12'); 
var hour1pm = $('#hour-13'); 
var hour2pm = $('#hour-14'); 
var hour3pm = $('#hour-15'); 
var hour4pm = $('#hour-16'); 
var hour5pm = $('#hour-17'); 








// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // Create a variable x that starts at 0
  var x = 0;
  // Use event listener on click
  $('.saveBtn').on('click', function () {
    // We want the x value to end when it reaches the user seleted time-block 
    console.log($(this));
    // Instead of this you could use event.target, but event must be placed in function()
    console.log($(this)[0].previousElementSibling.value);
    console.log($(this)[0].previousElementSibling.id);
    //Get the object from local storage, if empty just set to {}
    var hourObj = JSON.parse(localStorage.getItem('calendar')) || {};
    hourObj[$(this)[0].previousElementSibling.id] = $(this)[0].previousElementSibling.value; 
    // Now we set them to local storage
    localStorage.setItem('calendar',JSON.stringify(hourObj));
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // Use day.js to display the current day at the top of the callendar
  // format is: Thursday, September 5th
  var currDate = dayjs().format('dddd, MMMM D');

  $('#currentDay').text(currDate + "th");

  // if the day is 1, put 1st instead of 1th
  if (dayjs().format('D') == '1') {
    $('#currentDay').text(currDate + "st");
  }
  // Get hour in 24hour format
  var currentDayHour = dayjs().format('H');
  console.log(currentDayHour);

  for (var i = 9; i < 18; i++) {
    if (i < currentDayHour) {
        $('#hour-' + i).addClass('past')
    }
    if (i == currentDayHour) {
      $('#hour-' + i).addClass('present')
    }
    if (i > currentDayHour) {
      $('#hour-' + i).addClass('future')
    }
  }

  // Each timeblock is color coded to indicate whether we're in the 
  // past, present or future.
  // We must compare the time-block the with curentDayHour.
  // and based on that set the .past, .future, .present
  // Curr hour points
  var curr = $('.present').text;
  console.log(curr)
  // if curentDayHour is less than 
  // debugger
  if (curr.isBefore(currentDayHour)) {
    temp.addClass('past');
  } else if (curr.isSame(currentDayHour)) {
    temp.addClass('present');
  } else {
    temp.addClass('future');
  }


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});







