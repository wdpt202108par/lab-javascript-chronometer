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
    var secondstoMin = this.currentTime % (60 * 60);
    return secondstoMin = Math.floor (secondstoMin / 60);
    // ... your code goes here
  }

  getSeconds() {
    var seconds = this.currentTime % 60;
    return seconds;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    var minute = this.getMinutes;
    var second = this.getSeconds;
    var value = minute + second;
    if (second >= 60){
      var m = (second / 60) << 0
      minute += m
      second -= 60 * m
    }else{
    return ;
    }
    return value.String().slice(-2);
    // ... your code goes here
  }

  stop() {

    clearInterval()
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
