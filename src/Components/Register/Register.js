import React , {useRef, useState } from 'react'
import Headtitle from '../../Common/HeadTitle/Headtitle'
import { NavLink } from 'react-router-dom'

export default function Register() {
  const test = useRef();
  const [pop , setPOP] = useState(false);
  const [Saver1 , setSaver1] = useState("");
  const [Saver2 , setSaver2] = useState("");
  const [Saver3 , setSaver3] = useState("");
  const [Saver4 , setSaver4] = useState("");
  
  const setpop = (e) =>{
    e.preventDefault()
  if(Saver1 !== "" && Saver2 !== "" && Saver3 !== "" && Saver4 !== ""  ){
 if(Saver2 === Saver4 ){
  setPOP(true);

 }else{
  test.current.style.display = "block" ;
  setTimeout(()=>{
    test.current.style.display = "none" ;
  },8000)
 }
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
  const save3 = (e) =>{
      setSaver3(e.target.value)
  }
  const save4 = (e) =>{
      setSaver4(e.target.value)
  }

  return (
<div className="sign">
  {/* {console.log(Saver1)}
  {console.log(Saver2)}
  {console.log(Saver3)}
  {console.log(Saver4)} */}
    <Headtitle></Headtitle>
    <div className="con">
<form action="" onSubmit={setpop}>
<div className="box">
        <p>Entre your email and password below to log in to your account and use the benefits of our website</p>
        <input type="text" placeholder='Name' onChange={save3} />
        <input type="email" placeholder='Email' onChange={save1} />
        <input type="password"  placeholder='Bassword' onChange={save2} />
        <input type="password"  placeholder='Confirm  Bassword' onChange={save4} />
        <div className="go">
            <input type="submit" value={"Create an Account"}  />
        </div>
        <p className='wa' ref={test}> write the same password !!!</p>
    </div>
</form>
{pop &&     <div className="pop">
        <h1 className='cen' >Valid Data</h1>
        <h2>your name : {Saver3}</h2>
        <h2>your email : {Saver1}</h2>
        <h2>your password : {Saver2}</h2>
        <button onClick={hide} className='edit' > Confirm </button>
    </div> }
</div>
</div>
  )
}
