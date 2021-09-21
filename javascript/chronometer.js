class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
    
  }

  start(callback) {
    // Interval of 1 sec
    this.intervalId= setInterval(() => {
      this.currentTime++;
      if(callback) callback()
    }, (1*1000));
    
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    // Modulo reste de la division par 60 secondes
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // si juste un chiffre alors rajouter un 0 devant sous format string
    if (value<10) {
      return "0"+value;
      // sinon simplement convertir le nombre sous format string et c'est good
    } else {
      return `${value}`
    }
  }
    // ... your code goes here


  stop() {
    /* The clearInterval() method clears a timer set with the setInterval() method.
    The ID value returned by setInterval() is used as the parameter for the clearInterval() method.
    Note: To be able to use the clearInterval() method, you must use a variable when creating the interval method: */
    
    clearInterval(this.intervalId+=null);
    // ... your code goes here
  }

  reset() {
    //"we just need to set our currentTime" @Julie Going back to 0 ?
    this.currentTime=0;
    // ... your code goes here
  }

  split() {
    // creation var pour retriever minutes et seconds au format chrono (2 digits) 
    let minutesTwoDigits= this.computeTwoDigitNumber(this.getMinutes());
    let secondsTwoDigits = this.computeTwoDigitNumber(this.getSeconds());

    //retourner valeur string format chrono
    return `${minutesTwoDigits}:${secondsTwoDigits}`;
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
