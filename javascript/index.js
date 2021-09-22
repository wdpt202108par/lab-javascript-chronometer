const chronometer = new Chronometer();

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
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
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
  btnLeftElement.setAttribute('class', 'btn start')
  btnLeftElement.innerHTML=`START`
  //btnLeftElement.className = "btn start"
}

function setSplitBtn() {
  btnRightElement.setAttribute('class', 'btn reset')
  btnRightElement.innerHTML=`RESET`
  //btnRightElement.className = "btn reset"
}
 
function setStartBtn() {
  btnLeftElement.setAttribute('class', 'btn stop')
  btnLeftElement.innerHTML=`STOP`
  // btnLeftElement.className = "btn stop"
}

function setResetBtn() {
  btnRightElement.setAttribute('class', 'btn split')
  btnRightElement.innerHTML=`SPLIT`
  //btnRightElement.className = "btn split"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === "btn start" ) {
    setStartBtn();
    setResetBtn();
  } else {
    setStopBtn();
    setSplitBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
});