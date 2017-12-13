function Pomodoro () {
  this.pomodoroTime = 24
  this.shortBreak = 5
  this.longBreak = 15
  this.seconds = 60
  this.pomodoroCount = 0
  this.initPomodoro = function (callback) {
    var interval = setInterval(() => {
      this.seconds--
      console.log(this.seconds)
      if (this.seconds < 1) {
        this.pomodoroTime--
        this.seconds = 60
      }
      if (this.pomodoroTime < 1) {
        clearInterval(interval)
        this.pomodoroTime = 25
        this.seconds = 60
        this.pomodoroCount++
        callback()
      }
    }, 1000)
  }
  this.initShortBreak = function (callback) {
    var interval = setInterval(() => {
      this.seconds--
      console.log(this.seconds)
      if (this.seconds < 1) {
        this.shortBreak--
        this.seconds = 60
      }
      if (this.shortBreak < 1) {
        clearInterval(interval)
        this.shortBreak = 5
        this.seconds = 60
        callback()
      }
    }, 1000)
  }
  this.initLongBreak = function (callback) {
    var interval = setInterval(() => {
      this.seconds--
      if (this.seconds < 1) {
        this.longBreak--
        this.seconds = 60
      }
      if (this.longBreak < 1) {
        clearInterval(interval)
        this.longBreak = 25
        this.seconds = 60
        callback()
      }
    }, 1000)
  }
  this.getTotalPomodoros = function () {
    return this.pomodoroCount
  }
  this.getCurrentPomodoroTime = function() {
    return {min:this.pomodoroTime, sec:this.seconds}
  }
}

module.exports = Pomodoro
