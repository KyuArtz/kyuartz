// Create a new Date object
var currentDate = new Date();

// Get the full date
var fullDate = currentDate.toDateString();

// Output the full date to the paragraph element with id "full-date"
document.getElementById("full-date").textContent = fullDate;