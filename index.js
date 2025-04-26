$(document).ready(function () {



  function getCurrentDate() {
    // Get the current date
    let date = new Date();
    // get hour, minute, second
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // AM or PM settings
    let ampm = "AM";

    if (hour > 12) {
      hour = hour - 12;
      ampm = "PM";
    }
    if (hour == 0) {
      hour = 12;
      }
      
      // Set the timeout to call the function again after 1 second
      
      
      
      displayDate(hour, min, sec, ampm);
      setTimeout(getCurrentDate, 1000);
    }
    
    
    let displayDate = function (hour, min, sec, ampm) {
        $("#hours").text(hour);
        $("#min").text(min);
        $("#sec").text(sec);
        $("#Period").text(ampm);
        $(document).on("click", function () {
            console.log(ampm);
        });
    };
    getCurrentDate();
    
});
