import { useEffect, useState } from 'react'
import axios from 'axios'
import axiosRequests from '../../api/axios'
import GroupMembers from './group-members/Group-Members'

function Sidebar({ groupId}) {
  const [group, setGroup] = useState([])

  const getGroup = async () => {
    const groupData = await axiosRequests.getGroupData(groupId)
    setGroup(groupData.sort((a,b) => b.daily_score - a.daily_score))
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
        <div>Leaderboard</div>
        { group && group.map((member, index) => <GroupMembers member={member} key={index}/>) }
      </div>
    </div>
  )
}

export default Sidebar
