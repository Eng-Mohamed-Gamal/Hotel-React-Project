import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTypewriter , Cursor } from 'react-simple-typewriter'

export default function Footer() {
    const [text] = useTypewriter({
        words : ["Jemy" , "front End Developer"],
        loop:{} ,

    });
  return (
<div className="footer">
<div className="container">
    <div className="about">
        <h2>ABOUT US</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, voluptatibus. Exercitationem quis aliquam molestias sit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, qui?</p>
        <div className="media">
            <div className="icon">
            <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className="icon">
            <i class="fa-brands fa-twitter"></i>
            </div>
            <div className="icon">
            <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className="icon">
            <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="icon">
            <i class="fa-brands fa-github-alt"></i>
            </div>
            <div className="icon">
            <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
    </div>
    <div className="nav">
        <h2>NAVIGATION</h2>
        <div className="link">
            <NavLink to={"/"}  > Home </NavLink>
            <NavLink to={"/About"}  > About </NavLink>
            <NavLink to={"/Gallery"}  > Gallery </NavLink>
            <NavLink to={"/Destenation"}  > Destenation </NavLink>
            <NavLink to={"/Blog"}  > Blog </NavLink>
            <NavLink to={"/Testimonial"}  > Testimonial </NavLink>
            <NavLink to={"/Contact"}  > Contact </NavLink>
        </div>
    </div>
    <div className="post">
     <h2>POSTS</h2>
     <div className="box">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis.</p>
        <div className="flex">
        <i class="fa-solid fa-box"></i>
        <p>01 oct 2020</p>
        </div>
     </div>
     <div className="box box2">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis.</p>
        <div className="flex">
        <i class="fa-solid fa-box"></i>
        <p>01 oct 2020</p>
        </div>
     </div>
     <div className="box box2">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis.</p>
        <div className="flex">
        <i class="fa-solid fa-box"></i>
        <p>01 oct 2020</p>
        </div>
     </div>
    </div>
    <div className="new">
        <h2>NEWSLETTER</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorum </p>
        <input type="text"  />
        <button>SUBSCRIBE</button>
    </div>
</div>
<div className="writer">
<h2> Made By <span>{text}</span> <Cursor/></h2>
</div>
</div>
  )
}
