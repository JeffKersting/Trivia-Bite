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
      setGroupName(groupData.name)
      if (groupData.members.length > 1) {
        setGroup(groupData.members.sort((a,b) => b.daily_score - a.daily_score))
      } else {
        setGroup(groupData.members)
      }
    }
  }

  const leaveGroup = () => {
    axiosRequests.leaveGroup(user.id)
    setGroup(null)
  }

  const formHandler = async (e, groupInput) => {
    e.preventDefault()
    const type = e.target.name

    if (type === 'join') {
      const groupId = await axiosRequests.joinGroup(user.id, groupInput)
      user.group_id = groupId
      getGroup()
    } else if (type === 'create'){
      const groupId = await axiosRequests.createGroup(user.id, groupInput)
      setGroup([user])
      setGroupName(groupInput)
    }
  }

  const checkGroup = () => {
    if (group) {
      return (
        <>
          <div className='group-header'>
            <div className='group-name'>{groupName}</div>
            <button className='leave-group' onClick={leaveGroup}>Leave</button>
          </div>
          {group.map((member, index) => <GroupMembers member={member} key={index}/>)}
        </>
      )
    } else {
      return (
        <>
          <div>Looks like you aren't in a group! Join a group by group name below, or create one.</div>
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
      <div className='group'>
        {checkGroup()}
      </div>
    </div>
  )
}

export default Sidebar
