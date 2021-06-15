import { useEffect, useState } from 'react'
import axios from 'axios'
import GroupMembers from './group-members/Group-Members'

function Sidebar() {
  const [group, setGroup] = useState(null)

  const getGroup = async () => {
    const groupData = await axios.get('http://localhost:8080/group', {
      params: {
        groupId: '1'
      }
    })
    setGroup(groupData.data.sort((a,b) => b.daily_score - a.daily_score))
  }

  useEffect(() => {
    getGroup()
  }, [])

  return (
    <div className='sidebar'>
      <div className='user'>
        <div>Welcome User</div>
        <div>User Data</div>
      </div>
      <div className='group'>
        <div>Todays Scoreboard</div>
        { group && group.map((member, index) => <GroupMembers member={member} key={index}/>) }
      </div>
    </div>
  )
}

export default Sidebar
