import React,{ useEffect } from 'react'

const Navbar = ({setUserArray, setTotalPage,curentPage}) => {
  
  useEffect(()=>{
    const getUserData = async() =>{
      const response = await fetch(`https://reqres.in/api/users?page=${curentPage}`);
      try{
        const data = await response.json();
        setTotalPage(Number(data.total_pages));
        setUserArray(data.data);
      }
      catch(error){
        console.log(error);
      }
    }
    const getUser = document.getElementById('get-user');
    getUser.addEventListener('click',getUserData);
    getUserData();
  },[curentPage]);

  return (
    <div className='navbar-wrapper'>
      <nav className='navbar'>
      <h1>Burger king</h1>
      <button id='get-user'>get user</button>
      </nav>
    </div>
  )
}

export default Navbar;