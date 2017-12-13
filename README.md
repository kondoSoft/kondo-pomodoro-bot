# Kondo Pomodoro

## a simple pomodoro time bot for slack

### Actions list

```
Action: Start pomodoro
commands: init, init pomodoro, pomodoro, start pomodoro, start, iniciar pomodoro

Action: Short Break
commands: init break, descanso breve, break, short break

Action: Long Break
commands: init long break, descanso largo, long break

Action: Command List
command: help

Action: Get Current pomodoro time
command: time, tiempo

Action: Get pomodoros count
command: total

Action: Reset pomodoro count
command: reset count
```

#### Instructions

1. clone or download repository
2. in repository directory execute `npm install`
3. go to `app.js` file and change this lines:
```
const bot = new SlackBot({
  token: 'YOUR-TOKEN-ID',  // Add a bot https://my.slack.com/services/new/bot and put the token
  name: 'My Bot'
})
```
5. create Channel named pomodoro and add app to channel
6. npm start