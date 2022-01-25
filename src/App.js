import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Components/AboutUs/AboutUs'
import Team from './Components/Team/Team'
import Events from './Components/Events/Events'
import Video from './Components/Video/Video'
import ContactUs from './Components/ContactUs/ContactUs'
function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <AboutUs />
      <Team />
      <Events />

      <Video />

      <ContactUs />
    </>
  )
}

export default App
