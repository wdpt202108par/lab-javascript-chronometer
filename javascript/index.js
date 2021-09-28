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
  printMinutes()
  printSeconds()
}

function printMinutes() {
  const strtime = chronometer.split(); // '09:12'

  minDecElement.innerHTML = strtime[0]; // "0"
  minUniElement.innerHTML = strtime[1]; // "9"
}

function printSeconds() {
  const strtime = chronometer.split(); // '09:12'

  secDecElement.innerHTML = strtime[3]; // "1"
  secUniElement.innerHTML = strtime[4]; // "2"
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // create a new li
  const $li = document.createElement('li');
  $li.innerHTML = chronometer.split()
  
  // append it to ul
  splitsElement.appendChild($li)
}

function clearSplits() {
  // reset the watch
  chronometer.reset()
  printTime()

  // reset the splits
  splitsElement.innerHTML = ''
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnRightElement.className = 'btn stop';
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'START') {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'RESET') {
    clearSplits()
  } else {
    printSplit()
  }
});
