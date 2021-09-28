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
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());

  minDecElement.textContent = minutes.charAt(0);
  minUniElement.textContent = minutes.charAt(1);
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  secDecElement.textContent = seconds.charAt(0);
  secUniElement.textContent = seconds.charAt(1);
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
  btnLeftElement.className = 'btn start';
  btnLeftElement.textContent = 'START';
  btnRightElement.className = 'btn reset';
  btnRightElement.textContent = 'RESET';
  chronometer.stop();
  
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.className = 'btn stop';
  btnLeftElement.textContent = 'STOP';
  btnRightElement.className = 'btn split';
  btnRightElement.textContent = 'SPLIT';
  chronometer.start(printTime);
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start'){
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
});
