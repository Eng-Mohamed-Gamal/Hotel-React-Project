import React from 'react' 
import Test from './Test'


const Data = [

{
img : "Stack-2/gallery-1.jpg",
title: "Gallery One",
id :0
},
{
img : "Stack-2/gallery-2.jpg",
title: "Gallery Two",
id :1
},
{
img : "Stack-2/gallery-3.jpg",
title: "Gallery Three",
id :2
},
{
img : "Stack-2/gallery-4.jpg",
title: "Gallery Four",
id :3
},
{
img : "Stack-2/gallery-5.jpg",
title: "Gallery Five",
id :4
},
{
img : "Stack-2/gallery-6.jpg",
title: "Gallery Six",
id :5
}

]


export default function Datagallery() {

  return (
<div className="gallery top ">
<div className="container">
{Data.map((Box ,index) =>{
    return <Test box ={Box.img} title={Box.title} key={index} ></Test>
})}




</div>
</div>
  )
}
