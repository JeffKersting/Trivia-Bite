const express = require('express')
const cron = require('node-cron')
const router = require('./routes')
const cors = require('cors')
const getQuestions = require('./cron-jobs/questions')
const resetDailyScore = require('./cron-jobs/reset-scores')
const port = process.env.PORT || 8080
const whitelist = ['http://localhost:3000', 'http://localhost:8080', /*ADD HEROKU URL*/]

const corsOptions = {
  origin: (origin, callback) => {
    console.log('** Origin of request' + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log('Origin acceptable')
      callback(null, true)
    } else {
      console.log('Origin rejected')
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

cron.schedule('0 1 * * * ', () => {
  getQuestions()
  resetDailyScore()
  console.log('Fetching questions...')
})

app.listen(app.get('port'), () => console.log(`server listening on port ${port}`))
