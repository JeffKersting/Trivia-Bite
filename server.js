const express = require('express')
const cron = require('node-cron')
const router = require('./routes')
const cors = require('cors')
const getQuestions = require('./cron-jobs/questions')
const resetDailyScore = require('./cron-jobs/reset-scores')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

cron.schedule('0 1 * * * ', () => {
  getQuestions()
  resetDailyScore()
  console.log('Fetching questions...')
})

app.listen(8080, () => console.log('server listening on port 8080'))
