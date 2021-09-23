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
  // exec toutes les 1s

  // recupere chronometer.split() 02:36"

  const splittedTime = chronometer.split()
  console.log(splittedTime.charAt(4))

  const a = splittedTime.charAt(0)
  const b = splittedTime.charAt(1)
  const c = splittedTime.charAt(3)
  const d = splittedTime.charAt(4)

  // maj nos 4 spans avec 
  minDecElement.innerHTML = a; // "02:36"
  minUniElement.innerHTML = chronometer.split().chartAt(1);
  //secDecElement.innerHTML = chronometer.split().chartAt(3);
  //secUniElement.innerHTML = chronometer.split().chartAt(4);
  

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
  setStopBtn = btnLeftElement.innerHTML// ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  setStartBtn = btnLeftElement.innerHTML// ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === "START") {
    chronometer.start(printTime)

  
    //
    // btn left
    //
    
    btnLeftElement.className = 'btn stop' // bouton en rouge
    btnLeftElement.innerHTML = "STOP"// START -> STOP

    
    // btn right
    //

  } else {
    chronometer.stop()
  }
})

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
