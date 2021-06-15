import axios from 'axios'

function Sidebar() {
  const getGroup = async () => {
    const group = []
    const groupData = await axios.get('http://localhost:8080/group')
    groupData.data.forEach(member => {
      group.push({name: member.name, score: member.daily_score})
    })
    setGroup(group)
  }
}
