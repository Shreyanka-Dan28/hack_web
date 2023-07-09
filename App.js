import './App.css';
import Header from "./components/common/heading/Header"
import Footer from "./components/common/footer/Footer"
import Home from './components/Home/Home'
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Details from './components/pricing/details';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Payment  from './components/allcourses/Payment';
import Profile from './components/auth/Profile';
import Add from './components/Home/Add';
import Post from './components/blog/Post';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path='/courses' element={<CourseHome/>} />
          <Route path='/tutor' element={<Pricing/>} />
          <Route path='/journal' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/details' element={<Details/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/post' element={<Post/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/add' element={<Add/>} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
