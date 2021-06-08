const express = require('express')
const cron = require('node-cron')
const router = require('./routes')

const app = express()
app.use(express.json())
app.use(router)
fetch('https://opentdb.com/api.php?amount=1').then(response => console.log(response))


// cron.schedule('0 0 24 * * *') 24 HOUR SETUP
cron.schedule('* * * * * ', () => {
  console.log('Scheduler running...')
})

app.listen(8080, () => console.log('server listening on port 8080'))
