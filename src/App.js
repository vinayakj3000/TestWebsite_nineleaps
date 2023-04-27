import logo from "./logo.svg";
import "./App.css";
import clientBanner from "./Assets/ClientBanner.png";
import ClientBannerMobile from "./Assets/ClientBannerMobile.png";
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
import Section3BannerMobile from "./SectionsMobile/Section3BannerMobile";
import Section5BannerMobile from "./SectionsMobile/Section5BannerMobile";
import FooterMobile from "./Footer/FooterMobile";
import Section8Mobile from "./SectionsMobile/Section8Mobile";
import Section6Mobile from "./SectionsMobile/Section6Mobile";
import Section4Mobile from "./SectionsMobile/Section4Mobile";
import Section5Mobile from "./SectionsMobile/Section5Mobile";
import Section0Mobile from "./SectionsMobile/Section0Mobile";
import Section0MobilePart2 from "./SectionsMobile/Section0MobilePart2";
import NavbarMobile from "./Navbar/NavbarMobile";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal/Test";
import Test from "./Modal/Test";
import Section3New from "./Sections/Section3New";

function App() {
  const [showComponent, setShowComponent] = useState(false);
  const [showComponentTab, setShowComponentTab] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries[0].contentRect.width > 500) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    });
    console.log("showComponent", showComponent);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="App" ref={ref}>
      {/* {showComponent && (
        <>
          <Navbar />
          <Section0 />
          <img
            src={clientBanner}
            alt="clientBanner"
            className="ClientBanner"
          ></img>
          <Section1 />

          <Section2 />
          <Section3Banner />
          <Section4 showComponent={showComponent} />

          <Section5 />
          <Section5Banner />
          <Section6 />
          <Section7 />
          <Section8 />
          <Footer />
        </>
      )}
      {!showComponent && (
        <>
          <NavbarMobile />
          <Section0Mobile />
          <Section0MobilePart2 />
          <img
            src={ClientBannerMobile}
            alt="clientBanner"
            className="ClientBanner"
          ></img>
          <Section1 />

          <Section2 />
          <Section3BannerMobile />
          <Section4Mobile />
          <Section5Mobile />
          <Section5BannerMobile />
          <Section6Mobile />
          <Section7 />
          <Section8Mobile showComponent={showComponent} />
          <FooterMobile showComponent={showComponent} />
        </>
      )} */}
<Section3New/>
      {/* tab */}

      {/* <NavbarMobile />
      <Section0Mobile />
      <Section0MobilePart2 />
      <img src={clientBanner} alt="clientBanner" className="ClientBanner"></img>
      <Section1 showComponent={showComponent} />
      <Section2 />
      <Section3BannerMobile />
      <Section4 showComponent={showComponentTab} />
      <Section5 />
      <Section5BannerMobile />
      <Section6Mobile />
      <Section7 />
      <Section8Mobile showComponent={showComponent} />
      <FooterMobile showComponent={showComponent} /> */}


      {/* <Test/> */}

      {/* <Section3 /> */}
      {/* <div className="Section3"></div> */}
    </div>
  );
}

export default App;
