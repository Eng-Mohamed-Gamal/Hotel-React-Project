import React from 'react'

import Slide from './Slide'
import Noil from '../About/Noil'
import Datagallery from '../Gallery/Datagallery'
import Des from '../Destenations/Des'
import Log from '../Blog/Log'
import Monial from '../Testimonial/Monial'
import Popular from './Popular'


export default function Home() {
  return (
<div className="home">
<Slide></Slide>
<Noil></Noil>
<h1 className='cen' >   Our Gallery</h1>
<Datagallery></Datagallery>
<h2 className="cen">Most Popular Hotel</h2>
<Popular></Popular>
<h1 className="cen">Destenations</h1>
<Des></Des>
<h1 className="cen">Blog</h1>
<Log></Log>
<h1 className="cen">TestiMonial</h1>
<Monial></Monial>
</div>
  )
}
