import React, { useState } from 'react'

export default function Test(props) {
    const [popUp , setPopUp] = useState(false)
    const toggle = () =>{
        setPopUp(!popUp)
    }
  return (
<div className="alll">
<div className="box" onClick={toggle} >
    <img src={props.box} alt="" className='first'/>
    <h2>{props.title}</h2>
    <i class="fa-regular fa-image"></i>
</div>
{popUp &&<div className="pop">
<div className="hide"></div>
<button onClick={toggle} > Close </button>
   <img src={props.box} alt="" className='sec' />
</div>}
</div>
  )
}
