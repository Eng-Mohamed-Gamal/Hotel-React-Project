import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Headtitle() {
    const location = useLocation()
  return (
<div className="back">
<div className="container">
<div className="path">
    <h1>{location.pathname.split("/")[1]}</h1>
</div>
<div className="btn">
    <button><NavLink to={"/"}>Home</NavLink> <span> / {location.pathname.split("/")[1]}</span> </button>
</div>
</div>
</div>
  )
}
