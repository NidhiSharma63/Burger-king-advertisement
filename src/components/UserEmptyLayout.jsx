import React from 'react'

const UserEmptyLayout = () => {
  let userGridNumber = [];
  for(let i=1; i<=7;i++){
    userGridNumber.push(i);
  }
  return (
    <div className='user-wrapper'>
      {userGridNumber.map((user)=>(
        <div key={user.id} className='single-user'>
          <h1>user</h1>
          <div className="user-info">
            <p>user</p>
            <p>email</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserEmptyLayout;