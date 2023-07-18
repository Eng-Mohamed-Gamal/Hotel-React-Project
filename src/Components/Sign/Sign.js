import React, { useState } from 'react'
import Headtitle from '../../Common/HeadTitle/Headtitle'
import { NavLink } from 'react-router-dom'

export default function Sign() {
const [pop , setPOP] = useState(false);
const [Saver1 , setSaver1] = useState("");
const [Saver2 , setSaver2] = useState("");

const setpop = (e) =>{
    e.preventDefault();
if(Saver1 !== "" && Saver2 !== "" ){
    setPOP(true) 
    setTimeout(()=>{
        setPOP(false)
        },3000)
}

}
const hide = () =>{
    setPOP(false) 
}

const save1 = (e) =>{
    setSaver1(e.target.value)
}
const save2 = (e) =>{
    setSaver2(e.target.value)
}

  return (
<div className="sign">
    <Headtitle></Headtitle>
<div className="con">
<form action="" onSubmit={setpop}>
<div className="box">
        <p>Entre your email and password below to log in to your account and use the benefits of our website</p>
        <input type="email" placeholder='Email' onChange={save1} />
        <input type="password"  placeholder='Bassword' onChange={save2} />
        <div className="flex">
            <div className="flexin">
                <input type="checkbox" />
                <p>Remember me </p>
            </div>
            <span>i forgot my password</span>
        </div>
        <div className="go">
            <input type="submit" value={"Sign in"}  />
            <small>Don’t have account ? <span><NavLink to={"/Register"} >Sign up !</NavLink></span> </small>
        </div>
    </div>
</form>
{pop &&     <div className="pop">
        <h1 className='cen' >Valid Data</h1>
        <h2>your email : {Saver1}</h2>
        <h2>your password : {Saver2}</h2>
        <button onClick={hide} className='edit' > Confirm </button>
    </div> }
</div>
</div>
  )
}
