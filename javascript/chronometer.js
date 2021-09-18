class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    const intervalId = setInterval(() => {
      if (callback) {
        callback();
      } else {
        this.currentTime += 1;
      }
    }, 1000)
  }

  getMinutes() {
    return Math.trunc(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % (this.getMinutes() * 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    clearInterval(intervalId);
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
