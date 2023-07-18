import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'




export default function Navbar() {
const [Click , setClick] = useState(false);
const clickMenu = () =>{
  setClick(!Click)
}

  return (
<div className="all">
    <div className="container">
<div className="part-1">
<div className="icon" onClick={clickMenu} >
<i class={Click ? "fa-solid fa-times" : "fa-solid fa-bars" }></i>
</div>

{Click ? <ul className='normal'>
<li> <NavLink to={"/"}>Home</NavLink> </li>
<li><NavLink to={"/About"}>About</NavLink></li>
<li><NavLink to={"/Gallery"}>Gallery</NavLink></li>
<li><NavLink to={"/Destenation"}>Destenation</NavLink></li>
<li><NavLink to={"/Blog"}>Blog</NavLink></li>
<li><NavLink to={"/Testimonial"}>Testimonial</NavLink></li>
<li><NavLink to={"/Contact"}>Contact</NavLink></li>
</ul> :
 <ul className='hide'>
<li> <NavLink to={"/"}>Home</NavLink> </li>
<li><NavLink to={"/About"}>About</NavLink></li>
<li><NavLink to={"/Gallery"}>Gallery</NavLink></li>
<li><NavLink to={"/Destenation"}>Destenation</NavLink></li>
<li><NavLink to={"/Blog"}>Blog</NavLink></li>
<li><NavLink to={"/Testimonial"}>Testimonial</NavLink></li>
<li><NavLink to={"/Contact"}>Contact</NavLink></li>
</ul> }

<div className="contact">
<div className="sign">
<i class="fa-solid fa-chevron-right"></i>
<NavLink to={"/Sign"}  >Sign    </NavLink>
</div>
<div className="register">
<i class="fa-solid fa-chevron-right"></i>
<NavLink to={"/Register"}  > Register   </NavLink>
</div>
</div>
</div>




    </div>
</div>


  )
}
