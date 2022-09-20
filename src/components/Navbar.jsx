import React,{ useEffect } from 'react'

const Navbar = ({
  setUserArray, 
  setTotalPage,
  curentPage,
  setLoading,
  loadPage
}) => {
  
  useEffect(()=>{
    const getUserData = async() =>{
      setLoading(true);
      const response = await fetch(`https://reqres.in/api/users?page=${curentPage}`);
      setLoading(false)
      const data = await response.json();
      setTotalPage(Number(data.total_pages));
      setUserArray(data.data);
    }
    const getUser = document.getElementById('get-user');
    getUser.addEventListener('click',getUserData);
    if(loadPage===true){
      getUserData();
    }
  },[loadPage]);

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