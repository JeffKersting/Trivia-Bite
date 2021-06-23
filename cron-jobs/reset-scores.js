const db = require('../db/db')

const resetDailyScore = async () => {
  try {
    const id = await db('users').update({
      daily_score: 0
    })
    .returning('id')
  } catch(err) {
    console.log(err)
  }
}

module.exports = resetDailyScore
