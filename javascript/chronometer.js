class Chronometer {
  constructor() {
    this.currentTime=0;
    this.interValID=0;
  }
  start(callback) {
  //setInterval(()=>{     
     return this.currentTime++   
   //},100)     
  }
  getMinutes() {
    //setInterval(()=>{
      return this.minutes=Math.floor( this.currentTime/60)
    //},100)      
  }
  getSeconds() {  
    //setInterval(()=>{
      return this.seconds=this.currentTime%60  
    //},100)      
  }
  computeTwoDigitNumber(value) {  
    return value<10?value="0" +value
    :
    value=value  
  }
  stop() {
   clearInterval(this.interValID)
  }
  reset() {
    this.currentTime=0
  }
  split() {
    //setInterval(()=>{
     console.log(this.formatMmSs=`${this.computeTwoDigitNumber(this.minutes)}:${this.computeTwoDigitNumber(this.seconds)}`)
    //},100)    
  }
}
const chronometer= new Chronometer
chronometer.start()
chronometer.getMinutes()
chronometer.getSeconds()
chronometer.computeTwoDigitNumber()
chronometer.split()
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
