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
  var splitted = chronometer.split();
  minDecElement.innerHTML = `${splitted[0]}`;
  minUniElement.innerHTML = `${splitted[1]}`; 
}

function printSeconds() {
  var splitted = chronometer.split();
  secDecElement.innerHTML = `${splitted[3]}`;
  secUniElement.innerHTML = `${splitted[4]}`;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here 
}

function printSplit() {
splitsElement.innerHTML = `${chronometer.split()}`;
}
  

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  chronometer.stop();
}

function setSplitBtn() {
  chronometer.split(printSplit);
}

function setStartBtn() {
  chronometer.start(printTime);
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {  
 if (btnLeftElement.className === "btn start"){
    // si le bouton de gauche est VERT
    btnLeftElement.innerHTML = "STOP"; 
    btnLeftElement.className = "btn stop";
    btnRightElement.innerHTML = "SPLIT"; 
    btnRightElement.className = "btn split";
    setStartBtn();
  } else {
    // si le bouton de gauche est ROUGE
    btnLeftElement.innerHTML = "START";
    btnLeftElement.className = "btn start";
    btnRightElement.innerHTML = "RESET";
    btnRightElement.className = "btn reset" ;
    setStopBtn();
  };
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === "btn split") {
    // si le bouton de droite est BLEU
    setSplitBtn();
  }
});