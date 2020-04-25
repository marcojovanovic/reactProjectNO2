import React from 'react';
 
const ListItems = ({item, handleDelete}) => {


  return (

  
     <div onClick={()=>handleDelete(item.id)} style={{marginTop:'20px'}}>
       <ul className='list-group'>
         <li className={`list-group-item ${item.selected  ? 'bg-primary text-light' : ''}`}>
            {item.text}
         </li>
       </ul>
    </div>


    )}
    
  

 
export default ListItems;