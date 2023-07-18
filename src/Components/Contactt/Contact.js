import React, { useState } from 'react'
import Headtitle from '../../Common/HeadTitle/Headtitle'

export default function Contact() {
const [one , setOne] = useState("")
const [two , setTwo] = useState("")
const [three , setThree] = useState("")
const [four , setfour] = useState("")
const [five , setFive] = useState("")
const [six , setSix] = useState("")
const [seven , setSeven] = useState("")
const [pop , setPop] = useState(false)

const saver1= (e) => {
setOne(e.target.value)
}
const saver2= (e) => {
setTwo(e.target.value)
}
const saver3= (e) => {
setThree(e.target.value)
}
const saver4= (e) => {
setfour(e.target.value)
}
const saver5= (e) => {
setFive(e.target.value)
}
const saver6= (e) => {
setSix(e.target.value)
}
const saver7= (e) => {
setSeven(e.target.value)
}

const hadlePOP = (e) => {
e.preventDefault();
if (one !== "" && two !== "" && three!== "" && four !== "" && five !== "" && six !== "" && seven !== "") {
setPop(true);
}
}

const noPOP  = () =>{
  setPop(false)
}

  return (
    <div className='big'>
  <div className="contact">
  <Headtitle></Headtitle>
  <div className="container">
    <h2 className='cen' >contact form</h2>
    <form action=""  onSubmit={hadlePOP} >

<div className="inp">
<div className="first go">
  <p>First name</p>
  <input type="text"  onChange={saver1} />
</div>
<div className="sec go">
  <p>Last Name</p>
  <input type="text"  onChange={saver2}/>
</div>
</div>
<div className="inp">
<div className="number go">
  <p>phone Number</p>
  <input type="number" onChange={saver3} />
</div>
<div className="email go">
  <p>Email</p>
  <input type="email" onChange={saver4} />
</div>
</div>
<div className="inp">
<div className="subject go">
  <p>subject</p>
  <input type="text" onChange={saver5} />
</div>
<div className="Company go">
  <p>Your Company</p>
  <input type="text" onChange={saver6} />
</div>
</div>

<div className="text top">
  <p>Write Your Message</p>
<textarea name="" id="" cols="30" rows="10" onChange={saver7}></textarea>
</div>

<div className="sum top">
  <input type="submit" value="Send" />
</div>
    </form>

{pop ? <div className="pop">
<div className="info">
<h2>first name : {one}</h2>
  <h2>last name : {two}</h2>
  <h2> phone num : {three}</h2>
  <h2>your email : {four} </h2>
  <h2>your subject : {five}</h2>
  <h2>your company : {six}</h2>
  <h2> your Message : {seven} </h2>
  <div className="btn">
    <button className="edit"  onClick={noPOP}   >
      edit
    </button>
  </div>
</div>
</div> : "" }
    
  </div>
  </div>

    </div>
  )
}
