import React from 'react';
import SingleUser from './SingleUser';
import { Audio } from 'react-loader-spinner'

const Users = ({userArray,loading}) => {
  if(loading) return <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
  return (
    <div className='user-wrapper' >
      <SingleUser userArray={userArray}/>
    </div>
  )
}

export default Users;