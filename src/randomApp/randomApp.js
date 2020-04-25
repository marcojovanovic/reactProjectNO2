import React,{useState} from 'react';

import './random.css'
import ListItems from './ListItems';
 
const RandomApp = () => {

  const [inputValue, setInputValue]=useState('')
  const [items, setItems]=useState([])

  const handleSubmit=(e)=>{

    e.preventDefault()

    const newItem ={
        id: Date.now(),
        text:inputValue,
        selected:false
    }

    const newItems = [...items, newItem]

    console.log(newItems)

    setItems(newItems)
    setInputValue('')
  }

  console.log(items)


  const handleDelete=(id)=>{

    const delItems = items.filter(item=> item.id !== id)

    setItems(delItems)
  }

  const randomize=()=>{

    for(let i=0;i<items.length;i++){

      setTimeout(pickRandomItem, i *100)

    }
  }

  const pickRandomItem=()=>{

 let rand= Math.floor(Math.random()* items.length)

      let randomItem = items[rand]

     
      const pickItems = items.map(item=> item === randomItem ? {...item, selected: true} : {...item, selected:false})

     console.log(pickItems)

     setItems(pickItems)



  }


  return (
    <div className='container flex '>

      <div className='card-footer p-4' >
        <h5 className='text-warning text-center mb-3'>RandomApp</h5>
     <form onSubmit={handleSubmit}>   
  <div class="input-group">
  <input 
  type="text" 
  className="form-control" 
  value={inputValue}
  onChange={(e)=>setInputValue(e.target.value)}
 
  />
  <div className="input-group-append">
    <button className="btn btn-block btn-success" type="submit">add item</button>
  </div>
  </div>

</form>

    {items.map((item,index)=>(

       <ListItems 
       key={index} 
       item={item} 
       handleDelete={handleDelete}
        
       />

    ))}


{items.length > 0 && <button 
 className='btn btn-block btn-danger mt-4'
 onClick={randomize}
 
 >Randomize
 
 </button>}
</div>
    </div>
  );
}
 
export default RandomApp;