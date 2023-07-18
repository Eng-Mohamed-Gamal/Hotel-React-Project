import React from 'react'




export default function Logo() {
  return (
<div className="logo">
<div className="container">
  <div className="img">
    <img src="/Stack-2/logo.png" alt=""/>
  </div>
<div className="flex">
  <div className="colum">
    <div className="icon">
    <i class="fa-regular fa-clock fa-flip"></i>
    </div>
<div className="flex-in">
<h4>Working Hours</h4>
    <p>Monday-sunday : 9.00 am to 6.00 pm</p>
</div>
  </div>
  <div className="colum">
    <div className="icon">
    <i class="fa-solid fa-phone-volume fa-shake"></i>
    </div>
<div className="flex-in">
<h4>Call Us</h4>
    <p>01012707504</p>
</div>
  </div>
  <div className="colum">
    <div className="icon">
    <i class="fa-regular fa-envelope fa-beat"></i>
    </div>
<div className="flex-in">
<h4>Mail Us</h4>
    <p>mohamed@Exampel.com</p>
</div>
  </div>
</div>

</div>
</div>
  )
}
