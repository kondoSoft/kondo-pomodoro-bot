const SlackBot = require('slackbots')
const Pomodoro = require('./lib/pomodoro')
const pomodoroTimer = new Pomodoro()

var isCounting = false

const bot = new SlackBot({
  token: 'xoxb-286070656550-XoUAgimPisrBcB6TxGw6v5XX',
  name: 'Kondo Pomodoro'
})

bot.on('message', function (e) {
  if (e.type === 'message' && !isCounting) {
    var text = e.text.toLowerCase()
    console.log(text)
    if (text === 'iniciar pomodoro' ||
      text === 'init' ||
      text === 'pomodoro' ||
      text === 'init pomodoro' ||
      text === 'start pomodoro' ||
      text === 'start'
      ) {
      isCounting = true
      bot.postMessageToChannel('pomodoro', 'Pomodoro Iniciado, Tiempo: 25min.')
      pomodoroTimer.initPomodoro(function () {
        bot.postMessageToChannel('pomodoro', 'Pomodoro terminado')
        isCounting = false
      })
    }
    if (text === 'total') {
      var total = pomodoroTimer.getTotalPomodoros()
      bot.postMessageToChannel('pomodoro', 'Total de pomodoros: ' + total)
    }
    if (text === 'reset count') {
      pomodoroTimer.pomodoroCount = 0
    }
    if (text === 'descanso breve' || text === 'init break' || text === 'break' || text === 'short break') {
      isCounting = true
      bot.postMessageToChannel('pomodoro', 'Descanso Breve Iniciado, Tiempo: 5min.')
      pomodoroTimer.initShortBreak(function () {
        bot.postMessageToChannel('pomodoro', 'Descanso Breve Terminado')
        isCounting = false
      })
    }
    if (text === 'descanso largo' || text === 'init long break' || text === 'long break') {
      isCounting = true
      bot.postMessageToChannel('pomodoro', 'Descanso largo Iniciado, Tiempo: 15min.')
      pomodoroTimer.initLongBreak(function () {
        bot.postMessageToChannel('pomodoro', 'Descanso largo Terminado')
        isCounting = false
      })
    }
    if (text === 'help') {
      var helpText = `
        Action: Start pomodoro
commands: \`init\`, \`init pomodoro\`, \`pomodoro\`, \`start pomodoro\`, \`start\`, \`iniciar pomodoro\`

Action: Short Break
commands: \`init break\`, \`descanso breve\`, \`break\`, \`short break\`

Action: Long Break
commands: \`init long break\`, \`descanso largo\`, \`long break\`

Action: Command List
command: \`help\`

Action: Get Current pomodoro time
command: \`time\`, \`tiempo\`

Action: Get pomodoros count
command: \`total\`

Action: Reset pomodoro count
command: \`reset count\`
      `
      bot.postMessageToChannel('pomodoro', helpText)
    }
  } else {
    if (e.type === 'message') {
      if (e.text === 'tiempo' || e.text === 'time') {
        var time = pomodoroTimer.getCurrentPomodoroTime()
        bot.postMessageToChannel('pomodoro', 'Tiempo: ' + time.min + ':' + time.sec)
      }
    }
  }
})
