class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      if (callback) callback()
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime/100)%60);
  }

  getMilliseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    if(value <10){
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime= 0;
  }

  split() {
    const mm = this.computeTwoDigitNumber(this.getMinutes());
    const ss = this.computeTwoDigitNumber(this.getSeconds());
    const msms = this.computeTwoDigitNumber(this.getMilliseconds());

    return `${mm}:${ss}:${msms}`;
    
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
