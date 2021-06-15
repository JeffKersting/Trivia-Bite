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
    setGroup(groupData.data)
  }

  useEffect(() => {
    getGroup()
  }, [])

  return (
    <>
      <div>Sidebar</div>
      { group && group.map((member, index) => <GroupMembers member={member} key={index}/>) }
    </>
  )
}

export default Sidebar
