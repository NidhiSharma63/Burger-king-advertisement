import React from 'react';
import SingleUser from './SingleUser';
import Pagination from './Pagination';

const Users = ({userArray}) => {
  // console.log(userArray.data)
  return (
    <div className='user-wrapper' >
      <SingleUser userArray={userArray}/>
      {/* <Pagination {}/> */}
      {/* <div className="pagination">
        {
          // userArray.map((user)=>(
          //   <div>{user.}</div>
          // ))
        }
      </div> */}
    </div>
  )
}

export default Users;