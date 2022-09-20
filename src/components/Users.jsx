import React from 'react';
import SingleUser from './SingleUser';

const Users = ({userArray}) => {
  return (
    <div className='user-wrapper' >
      <SingleUser userArray={userArray}/>
    </div>
  )
}

export default Users;