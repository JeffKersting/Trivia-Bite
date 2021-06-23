function GroupMembers({ member }) {
  if (!member.daily_score) member.daily_score = 0

  return (
    <div className='group-member'>{member.name} : {member.daily_score}</div>
  )
}

export default GroupMembers
