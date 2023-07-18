import React from 'react'
import Data from './Data'
import { NavLink } from 'react-router-dom'

export default function Log() {
  return (
<div className="blog top">
    <div className="container">
        {Data.map( Blog  => {
return(
<div className="blog"  key={Blog.id} >
<div className="img"><img src={Blog.img} alt="" /></div>
<div className="flex"><p>january 30 , 2019 </p><p className="rule">{Blog.rule}</p></div>
<h2>{Blog.title}</h2>
<jemy> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quae doloremque ea sapiente, ipsam aliquam?   </jemy>
<div className="link"><NavLink to={`/SingleBlog/${Blog.id}`} >Read more</NavLink></div>
</div>
)
        })}
    </div>
</div>
  )
}
