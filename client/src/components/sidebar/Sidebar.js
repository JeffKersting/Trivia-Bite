import { useEffect, useState } from 'react'
import axiosRequests from '../../api/axios'
import GroupMembers from './group-members/Group-Members'
import GroupForm from './group-form/Group-Form'

function Sidebar({ user }) {
  const [group, setGroup] = useState(null)
  const [groupName, setGroupName] = useState(null)

  /*
    getGroup called in useEffect with user dependency, allowing for rerender
    upon quiz completion to reflect updated scores. Also works with intial
    mount when user state is updated on App.js
  */
  const getGroup = async () => {
    if (user.group_id) {
      const groupData = await axiosRequests.getGroupData(user.group_id)
      setGroupName(groupData.name)
      /*
        Condtional checks if user is in a group with others, and sorts
        the group by order of score.
      */
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
    /*
      Conditional check for action type, to either join or create group
    */
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

  /*
    Conditional check for existence of group. If user is in a group, group
    member scoreboard is rendered. Otherwise a form allowing users to join
    or create a group is rendered.
  */
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
          <GroupForm formHandler={formHandler}/>
        </>
      )
    }
  }

  /*
    getGroup data retrieval uses user as dependency to allow for data fetching
    upon user quiz submission, allowing for correct sorting of score.
  */
  useEffect(() => {
    getGroup()
  }, [user])

  return (
    <div className='sidebar'>
      <div className='group'>
        {checkGroup()}
      </div>
    </div>
  )
}

export default Sidebar
