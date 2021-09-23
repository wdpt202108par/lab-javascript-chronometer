  class Chronometer {
    constructor() {
      this.currentTime = 0;
      this.intervalId = null;
      // ... your code goes here
    }

  start(callback) {
    this.intervalId = setInterval(() =>{
    let i = 1
    this.currentTime = this.currentTime + i;
      }, 1000)
      
    // ... your code goes here
  }

  getMinutes() {
    var secondstoMin = this.currentTime/60;
    return secondstoMin = Math.floor(secondstoMin);
    // ... your code goes here
  }

  getSeconds() {
    var seconds = this.currentTime % 60;
    return seconds;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value < 10){
      return `0${value}`; 
    } else{
      return `${value}`;
    }
    // ... your code goes here
  }

  stop() {

  clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    const mm = this.computeTwoDigitNumber(this.getMinutes());
    const ss = this.computeTwoDigitNumber(this.getSeconds());

    return `${mm}:${ss}`;
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
