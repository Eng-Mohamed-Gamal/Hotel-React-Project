import React from 'react'
import Data from './Data'

export default function Monial() {
  return (
<div className="monial top" >
    <div className="container">
        {Data.map((Box , index) =>{
            return (
<div className="box" key={index}>
<i class="fa-solid fa-ribbon"></i>
<p>{Box.p}</p>
<div className="con">
    <div className="flex">
        <img src={Box.img} alt="" />
        <div className="in-flex">
            <h3>{Box.name}</h3>
            <h4>{Box.rule}</h4>
        </div>
    </div>
</div>
</div>


            )
        })}
    </div>
</div>
  )
}
