// Select Every Count Container
const countContainer = document.querySelectorAll(".count-digit");

// Select HTML5 Audio element
const timeoutAudio = document.getElementById("alarm_audio");

// Default inital value of timer
var defaultValue = 2 * 60;

// variable to the time
var countDownTime = defaultValue;

// variable to store time interval
var timerID;

// Variable to track whether timer is running or not
var isStopped = true;



window.addEventListener('keydown', (e) => {
    console.log(e)
    if(e.key == "2")
        defaultValue = 2 * 60;
    if(e.key == "3")
        defaultValue = 3 * 60;
    if(e.key == "4")
        defaultValue = 4 * 60;
    if(e.key == "5")
        defaultValue = 5 * 60;
    if(e.key == "8")
        defaultValue = 8 * 60;

    if(e.key == "p" || e.key == "P")
        stopTimer();
    if(e.key == "r" || e.key == "R")
        resetTimer();
    if(e.key == "s" || e.key == "S")
        startTimer();
    
})


// Function calculate time string
const findTimeString = () => {
  var minutes = String(Math.trunc(countDownTime / 60));
  var seconds = String(countDownTime % 60);
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  return minutes + seconds;
};

// Function to start Countdown
const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    timerID = setInterval(runCountDown, 1000);
  }
};

// Function to stop Countdown
const stopTimer = () => {
  isStopped = true;
  if (timerID) {
    clearInterval(timerID);
  }
};

// Function to reset Countdown
const resetTimer = () => {
  stopTimer();
  countDownTime = defaultValue;
  renderTime();
};

// Initialize alarm sound
timeoutAudio.src = "http://soundbible.com/grab.php?id=1252&type=mp3";
timeoutAudio.load();

// Function to display coundown on screen
const renderTime = () => {
  const time = findTimeString();
  countContainer.forEach((count, index) => {
    count.innerHTML = time.charAt(index);
  });
};

// function to execute timer
const runCountDown = () => {
  // decement time
  countDownTime -= 1;
  //Display updated time
  renderTime();

  // timeout on zero
  if (countDownTime === 0) {
    stopTimer();
    // Play alarm on timeout
    timeoutAudio.play();
    countDownTime = defaultValue;
  }
};