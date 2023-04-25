import logo from "./logo.svg";
import "./App.css";
import clientBanner from "./Assets/ClientBanner.png";
import Section1Image from "./Assets/Section1Image.png";
import banner2 from "./Assets/banner2.png";
import { section1Constants } from "./Constants/Constants";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3Banner from "./Sections/Section3Banner";
import Section5 from "./Sections/Section5";
import Section4 from "./Sections/Section4";
import Section5Banner from "./Sections/Section5Banner";
import Section6 from "./Sections/Section6";
import Section8 from "./Sections/Section8";
import Section0 from "./Sections/Section0";
import Navbar from "./Navbar/Navbar";
import Section7 from "./Sections/Section7";
import Section3 from "./Sections/Section3";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Section0 />

      {/* <img src={clientBanner} alt="clientBanner" className="ClientBanner"></img> */}

      {/* <Section1/> */}
      {/* <Section2 /> */}
      {/* <Section3Banner /> */}

      {/* <Section3 /> */}
      {/* <div className="Section3"></div> */}

      {/* <Section4 /> */}
      {/* <Section5 /> */}
      {/* <Section5Banner/> */}
      {/* <Section6 /> */}
      {/* <Section7 /> */}
      {/* <Section8 /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
