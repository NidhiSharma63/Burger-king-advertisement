import React from 'react'

const UserEmptyLayout = () => {
  let userGridNumber = [];
  for(let i=1; i<=7;i++){
    userGridNumber.push(i);
  }
  return (
    <div className='user-wrapper'>
      {userGridNumber.map((user)=>(
        <div key={user.id} className='empty-user'>
        </div>
      ))}
    </div>
  )
}

export default UserEmptyLayout;