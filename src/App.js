import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Components/AboutUs/AboutUs'
import Team from './Components/Team/Team'
import Events from './Components/Events/Events'
import Video from './Components/Video/Video'
import ContactUs from './Components/ContactUs/ContactUs'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
// import { render } from "react-dom";
import Alumina from './Our team/Alumini'
import Coreteama from './Our team/Coreteam'
import Mentor from './Our team/Mentors'
import Volunteer from './Our team/Volunteers'

function App() {
  return (
    <Router><Routes><Route path="/" element={<>
      <Navbar />
      <Hero />
      <AboutUs />
      <Team />
      <Events />
      <Video />
      <ContactUs />
    </>}></Route>
    
    <Route path="/Alumini" element={<Alumina/>}></Route>
    <Route path="/Coreteam" element={<Coreteama/>}></Route>
    <Route path="/Mentors" element={<Mentor/>}></Route>
    <Route path="/Volunteers" element={<Volunteer/>}></Route>
       
    </Routes></Router>
   
  )
}

export default App
