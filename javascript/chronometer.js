class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
    
  }

  start(callback) {
    this.intervalId= setInterval(() => {
      this.currentTime++;
      if(callback) callback()
    }, (1*1000));
    
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
