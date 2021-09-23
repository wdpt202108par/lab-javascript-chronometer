const chronometer = new Chronometer(); // {currentTime: 0, intervalId: null}

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  var minutesSplitted = chronometer.split();
  minDecElement.innerHTML = `${minutesSplitted[0]}`;
  minUniElement.innerHTML = `${minutesSplitted[1]}`; 
}

function printSeconds() {
  var secondsSplitted = chronometer.split();
  secDecElement.innerHTML = `${secondsSplitted[3]}`;
  secUniElement.innerHTML = `${secondsSplitted[4]}`;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  chronometer.stop();
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  chronometer.start();
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === "btn start"){
    // si le bouton est actuellement VERT
    btnLeftElement.innerHTML = "STOP"; 
    btnLeftElement.className = "btn stop";
    btnRightElement.innerHTML = "SPLIT"; 
    btnRightElement.className = "btn split";
    setStartBtn();
  } else {
    // si le bouton est actuellement ROUGE
    btnLeftElement.innerHTML = "START";
    btnLeftElement.className = "btn start";
    btnRightElement.innerHTML = "RESET";
    btnRightElement.className = "btn reset" ;
    printTime();
    setStopBtn();
  };
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  //  ... your code goes here
});