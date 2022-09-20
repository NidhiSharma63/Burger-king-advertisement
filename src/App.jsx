import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';

const App = () => {
 
  const [userArray,setUserArray] = useState([])
  
  return (
    <div className='main-wraper'>
      <Navbar setUserArray={setUserArray}/>
      <Users userArray={userArray}/>
    </div>
  )
}

export default App;