import { useEffect, useState } from 'react'
import axiosRequests from '../../api/axios'
import GroupMembers from './group-members/Group-Members'

function Sidebar({ user }) {
  const [group, setGroup] = useState(null)
  const [groupName, setGroupName] = useState(null)

  const getGroup = async () => {
    if (user.group_id) {
      const groupData = await axiosRequests.getGroupData(user.group_id)
      setGroupName(groupData.groupName[0].group_name)
      setGroup(groupData.groupMembers.sort((a,b) => b.daily_score - a.daily_score))
    }
  }

  const checkGroup = () => {
    if (group) {
      return (
        <>
          <div className='group-name'>{groupName}</div>
          {group.map((member, index) => <GroupMembers member={member} key={index}/>)}
        </>
      )
    } else {
      return (
        <>
          <div>Looks like you aren't in a group! Join a group by group name below, or create one!</div>
          <button>Join Group</button>
          <button>Create Group</button>
        </>
      )
    }
  }


  useEffect(() => {
    getGroup()
  }, [])

  return (
    <div className='sidebar'>
      <div className='user'>{user.name}</div>
      <div className='group'>
        {checkGroup()}
      </div>
    </div>
  )
}

export default Sidebar
