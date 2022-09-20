import React from 'react'

const SingleUser = ({userArray}) => {
  console.log(userArray)
  return (
   <>
    {
      userArray.length>0 &&
      userArray.map((user)=>(
        <div key={user.id} className='single-user'>
          <img src={user.avatar} alt="user" />
          <div className="user-info">
            <p>{user.first_name} {user.last_name}</p>
            <p>email:{user.email}</p>
          </div>
        </div>
      ))
    }
   </>
  )
}

export default SingleUser;