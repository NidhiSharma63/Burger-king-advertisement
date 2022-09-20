import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Pagination from './components/Pagination';


const App = () => {
 
  const [userArray,setUserArray] = useState([]);
  const [totalPage,setTotalPage] = useState(null);
  const [curentPage,setCurentPage] = useState(1);
  const [loading,setLoading] = useState(false);
  const [loadPage,setLoadPage] = useState(false)
  
  return (
    <div className='main-wraper'>
      <Navbar 
        setUserArray={setUserArray} 
        setTotalPage={setTotalPage} 
        curentPage={curentPage}
        setLoading={setLoading}
        loadPage={loadPage}/>
      <Users userArray={userArray} loading={loading}/>
      <Pagination 
        totalPage={totalPage} 
        setCurentPage={setCurentPage}
        setLoadPage={setLoadPage}/>
    </div>
  )
}

export default App;