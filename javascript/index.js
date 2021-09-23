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

// change the status of the buttons
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

//start chronometer
function setStartBtn(){
  chronometer.start();
};

//stop chronometer
function setStopBtn() { 
  chronometer.stop();
};


//Print chronometer
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

/*
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  
}

function clearSplits() {
  // ... your code goes here
}

function setSplitBtn() {
  
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
});*/