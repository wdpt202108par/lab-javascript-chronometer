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
  // ... your code goes here
  
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
 btnLeftElement.onclick = chronometer.start();

}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.onclick = chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start'){
    btnLeftElement.className = 'btn stop';
    btnLeftElement.textContent = 'STOP';
    btnRightElement.className = 'btn split';
    btnRightElement.textContent = 'SPLIT';
  } else {
    btnLeftElement.className = 'btn start';
    btnLeftElement.textContent = 'START';
    btnRightElement.className = 'btn reset';
    btnRightElement.textContent = 'RESET';
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === 'btn reset'){
    
  } else {
   
  }
});
