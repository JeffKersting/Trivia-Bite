const express = require('express')
const cron = require('node-cron')
const router = require('./routes')
const getQuestions = require('./cron-jobs/questions')

const app = express()
app.use(express.json())
app.use(router)

cron.schedule('0 1 * * * ', () => {
  getQuestions()
  console.log('Fetching questions...')
})

app.listen(8080, () => console.log('server listening on port 8080'))
