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
  printMinutes(); 
  printSeconds();
  //call minutes and seconds
  // ... your code goes here
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
  secUniElement.innerHTML = splitMinutes[1];
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
  // ... your code goes here
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.innerHTML = 'START';

  // ... your code goes here
}

function setResetBtn() {
  clearInterval();
  
  // ... your code goes here
}
let printInterval;

// Start/Stop Button
btnLeftElement.addEventListener('click', (event) => {
  //button text changes but would need to check if button actions chronometer
  if (event.target.outerText === 'START'){
    chronometer.start();
    printInterval = setInterval(printTime, 10000);
    setStopBtn();
  }else{
    chronometer.stop();
    setStartBtn();
    clearInterval(printInterval);
  }
  // ... your code goes here
});
 
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML=== 'RESET'){
    btnRightElement.innerHTML = 'SPLIT';
    chronometer.reset();
    clearSplits();
    printTime();
  }else{
    printSplit();
    btnRightElement.innerHTML = 'RESET';
  }
  /*if(btnRightElement.innerHTML === 'RESET'){
    btnRightElement.innerHTML = 'SPLIT'
  }else{
    btnRightElement.innerHTML = 'RESET';
  };*/

});
