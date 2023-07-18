import React from 'react'
import { NavLink } from 'react-router-dom'
import Data from "./Data"





export default function Des() {
  return (
<div className="des top">
    <div className="container">
        {Data.map(box =>{
            return (
                <div className="box"  key={box.id}>
                    <img src={box.img} alt="" />
                    <h2>{box.title}</h2>
                    <NavLink to={`/SingleDes/${box.id}`} ><i class="fa-solid fa-film"></i></NavLink>
                </div>
            )
        } )}
    </div>
</div>
  )
}
