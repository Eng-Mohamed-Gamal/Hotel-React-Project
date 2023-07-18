import React  from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Data  = [ 

{
    img : "/Stack-2/popular1.jpg",
    name : "Italy" , 
    title : "Hotel Valle" , 
    price : "$300.00"
},
{
    img : "/Stack-2/popular2.jpg",
    name : "Mexico" , 
    title : "Hotel Las Trojes" , 
    price : "$400.00"
},
{
    img : "/Stack-2/popular3.jpg",
    name : "United States" , 
    title : "Rosen Shingle Creek " , 
    price : "$500.00"
},
{
    img : "/Stack-2/popular4.jpg",
    name : "Tbailand" , 
    title : "Ansan Hotel " , 
    price : "$100.00"
},
{
    img : "/Stack-2/popular5.jpg",
    name : "Vietnam" , 
    title : "Fawlty Tower" , 
    price : "$200.00"
},
{
    img : "/Stack-2/gallery-1.jpg",
    name : "Germany" , 
    title : "Berlin Hotel" , 
    price : "$150.00"
},
{
    img : "/Stack-2/gallery-2.jpg",
    name : "Norway" , 
    title : "Days Hotel" , 
    price : "$190.00"
},
{
    img : "/Stack-2/gallery-3.jpg",
    name : "france" , 
    title : "Baris Hotel" , 
    price : "$130.00"
},
{
    img : "/Stack-2/gallery-4.jpg",
    name : "Belgium" , 
    title : " Brussels Hotel" , 
    price : "$250.00"
},
{
    img : "/Stack-2/gallery-5.jpg",
    name : "portgal" , 
    title : "Lisbon Hotel" , 
    price : "$90.00"
},
{
    img : "/Stack-2/gallery-6.jpg",
    name : "Japan" , 
    title : "Tokyo Hotel" , 
    price : "$75.00"
},



]

const SampleNextArrow =  (props) => {
const {onClick} = props ;
return (
  <div className="control right"  onClick={onClick} >
<i class="fa-solid fa-arrow-right fa-shake"></i>
  </div>
)
}
const SamplePrevArrow =  (props) => {
const {onClick} = props ;
return (
  <div className="control left"  onClick={onClick} >
<i class="fa-solid fa-arrow-left fa-shake"></i>
  </div>
)
}


export default function Popular() {

        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 0,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    

  return (
<div className="popular">
    <div className="container">
<Slider {...settings} >
{Data.map((slide ,index) =>{
    return (
<div className="slide" key={index} >
    <div className="img">
        <div className="con">
        <i class="fa-solid fa-location-dot"></i>
        <p>{slide.name}</p>
        </div>
        <img src={slide.img} alt="" />
        </div>
    <div className="rate">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    </div>
    <h3>{slide.title}</h3>
    <h2> <span>{slide.price}/</span> per night    </h2>
</div>

    )
}) }
</Slider>
    </div>
</div>
  )
}
