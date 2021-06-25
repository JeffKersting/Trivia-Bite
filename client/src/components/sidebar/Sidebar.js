import { useEffect, useState } from 'react'
import axiosRequests from '../../api/axios'
import GroupMembers from './group-members/Group-Members'
import GroupForm from './group-form/Group-Form'

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

  const formHandler = async (e, groupInput) => {
    e.preventDefault()
    const type = e.target.name

    if (type === 'join') {
      const groupId = await axiosRequests.joinGroup(user.id, groupInput)
      user.group_id = groupId
      getGroup()
    } else {
      
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
          <GroupForm formHandler={formHandler}/>

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
