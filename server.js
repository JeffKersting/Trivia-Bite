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

const app = express()
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next()
// })

app.use(helmet({
  contentSecurityPolicy: false
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
  origin: '*',
  credentials: false,
  methods: ['GET', 'POST', 'DELETE', 'PATCH']
 }))
app.use('/', router)
app.use('/home', router)
app.use('/login', router)




if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
}

cron.schedule('* * * * * ', () => {
  getQuestions()
  resetDailyScore()
  console.log('Fetching questions...')
})

app.listen(port, () => console.log(`server listening on port ${port}`))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'), (err) => {
    if (err) {
        res.status(500).send(err)
      }
    })
})
