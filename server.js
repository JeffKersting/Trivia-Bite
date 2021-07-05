const express = require('express')
const bodyParser = require('body-parser')
const cron = require('node-cron')
const router = require('./routes')
const cors = require('cors')
const helmet = require('helmet')
const path = require('path')
const getQuestions = require('./cron-jobs/questions')
const resetDailyScore = require('./cron-jobs/reset-scores')
const port = process.env.PORT || 8080
const whitelist = ['http://localhost:3000', 'http://localhost:8080', /*ADD HEROKU URL*/]

const app = express()

app.use(helmet({
  contentSecurityPolicy: false
}))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', router)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
}

cron.schedule('0 1 * * * ', () => {
  getQuestions()
  resetDailyScore()
  console.log('Fetching questions...')
})

app.listen(port, () => console.log(`server listening on port ${port}`))
