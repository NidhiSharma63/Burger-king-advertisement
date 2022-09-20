import React,{ useEffect } from 'react'

const Navbar = ({setUserArray}) => {
  
  useEffect(()=>{
    const getUserData = async() =>{
      const response =await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUserArray(data.data)
    }
    getUserData()
  },[]);

  return (
    <div className='navbar-wrapper'>
      <nav className='navbar'>
      <h1>Burger king</h1>
      <button>get user</button>
      </nav>
    </div>
  )
}

export default Navbar;