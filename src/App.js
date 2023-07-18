
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Common/Navbar/Navbar';
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Gallery from "./Components/Gallery/Gallery"
import Destenation from "./Components/Destenations/Destenation"
import Blog from "./Components/Blog/Blog"
import Testimonial from "./Components/Testimonial/Testimonial"
import Contact from "./Components/Contactt/Contact"
import Logo from './Common/Logo/Logo';
import SingleDES from './Components/Destenations/SingleDES';
import SingleBlog from './Components/Blog/SingleBlog';
import Footer from './Common/footer/Footer';
import Sign from './Components/Sign/Sign';
import Register from './Components/Register/Register';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar></Navbar>
<Logo></Logo>
<Routes>
  <Route path='/' element={<Home></Home>} ></Route>
  <Route path='/About' element={<About></About>} ></Route>
  <Route path='/Gallery' element={<Gallery></Gallery>} ></Route>
  <Route path='/Destenation' element={<Destenation></Destenation>} ></Route>
  <Route path='/Blog' element={<Blog></Blog>} ></Route>
  <Route path='/Testimonial' element={<Testimonial></Testimonial>} ></Route>
  <Route path='/Contact' element={<Contact></Contact>} ></Route>
  <Route path='/Sign' element={<Sign></Sign>} ></Route>
  <Route path='/Register' element={<Register></Register>} ></Route>
  <Route path='/SingleDES/:id' element={<SingleDES></SingleDES>} ></Route>
  <Route path='/SingleBlog/:ip' element={<SingleBlog></SingleBlog>} ></Route>
</Routes>

<Footer></Footer>
</BrowserRouter>

    </div>
  );
}

export default App;
