import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Pagination from './components/Pagination';


const App = () => {
 
  const [userArray,setUserArray] = useState([]);
  const [totalPage,setTotalPage] = useState(null);
  const [curentPage,setCurentPage] = useState(1)
  
  return (
    <div className='main-wraper'>
      <Navbar setUserArray={setUserArray} setTotalPage={setTotalPage} curentPage={curentPage}/>
      <Users userArray={userArray}/>
      <Pagination totalPage={totalPage} setCurentPage={setCurentPage}/>
    </div>
  )
}

export default App;