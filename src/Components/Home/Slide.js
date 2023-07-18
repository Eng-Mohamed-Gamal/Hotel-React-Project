import React, { useState } from 'react'
import Data from './Data'
import About from '../About/About'


export default function Slide() {
const [Current , setCurrent] = useState(1)
const count = Data.length
const plus = () =>{
  setCurrent(Current === count- 1 ? 0 : Current+1)
}
const minus = () =>{
  setCurrent(Current === 0 ? count-1 : Current-1)
}

const prventDefault = (e) =>{
e.preventDefault()
}


  return (
<div className="slide top">

    <button className="right" onClick={plus} >
    <i class="fa-solid fa-caret-right fa-fade"></i>
    </button>
    <button className="left" onClick={minus} >
    <i class="fa-solid fa-caret-left fa-fade"></i>

    </button>


{Data.map((slide , index) => {
  return(
    <div className={index===Current ? "true active" : "true"} key={index} >
       {index===Current && <img src={slide.image} alt=""  />  }
    </div>
  )
})}

<div className="inputs">
  <h3>Enjoy your holiday</h3>
  <p>Search and book hotel</p>
  <form action="">
    <input type="text" placeholder='Search City'/>
 <div className="date">
 <input type="date" />
    <input type="date" />
 </div>
<div className="age">
<input type="number" placeholder='Adults(18+)'/>
<input type="number" placeholder='Children(1-17)'/>
</div>
    <input type="text" placeholder='Rooms'/>
    <input type="Submit" value={"Shoot a Book"} className='go' onClick={prventDefault} />
  </form>
</div>


</div>
  )
}
