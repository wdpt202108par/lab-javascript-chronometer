const chronometer = new Chronometer(); // {¨currentTime: 3}

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
  let splitMinutes = minutes.split('');
  minDecElement.innerHTML = splitMinutes[0];
  minUniElement.innerHTML = splitMinutes[1];
  // ... your code goes here
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  let splitSeconds = seconds.split('');
  secDecElement.innerHTML = splitSeconds[0];
  secUniElement.innerHTML = splitSeconds[1];
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
  splitsElement.innerHTML = null;
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerHTML = 'STOP';
  // ... your code goes here
}

function setSplitBtn() {
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.innerHTML = 'SPLIT';
  // ... your code goes here
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  clearInterval();
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'START'){
    chronometer.start(printTime);
    setStopBtn();
  }else{
    chronometer.stop();
    setStartBtn();
  }
});
 
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'RESET'){
    chronometer.reset();
    setSplitBtn();
    clearSplits();
  }else{    
    setResetBtn();
  }
});
