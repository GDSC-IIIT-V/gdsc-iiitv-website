import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import Team from "./Components/Team/Team";
import Events from "./Components/Events/Events";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <AboutUs />
      <Team />
      <Events />
    </>
  );
}

export default App;
