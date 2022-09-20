import React from 'react'

const Pagination = ({totalPage,setCurentPage,setLoadPage}) => {
  
  let pageNumber = [];
  for(let i=1; i<=totalPage;i++){
    pageNumber.push(i);
  }
  const handlePage = (e) =>{
    setLoadPage(true);
    setCurentPage(Number(e.target.innerText));
  }
  return (
    <div className='pagination'>
      <ul>
        {
          pageNumber.map((i)=>{
            return(
              <li key={i} onClick={(e)=>handlePage(e)}>{i}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Pagination;