import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Section0 from "../Sections/Section0";
import Section1 from "../Sections/Section1";
import Section2 from "../Sections/Section2";
import Section3Banner from "../Sections/Section3Banner";
import Section4 from "../Sections/Section4";
import Section5 from "../Sections/Section5";
import Section5Banner from "../Sections/Section5Banner";
import Section6 from "../Sections/Section6";
import Section7 from "../Sections/Section7";
import Section8 from "../Sections/Section8";
import Footer from "../Footer/Footer";
import clientBanner from "../Assets/ClientBanner.png";
import Section3New from "../Sections/Section3New";
import ImageGallery from "../Sections/ImageGallery";
import Test2 from "../Sections/Test2";
import Banner from "../Test/Banner";
import TN from "../Test/TN";

function DesktopComponent() {
  const [showComponent, setShowComponent] = useState(false);
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
    <div ref={ref}>
      {/* <Navbar /> */}
      <TN/>
      <Section0 />
      <img src={clientBanner} alt="clientBanner" className="ClientBanner"></img>
      <Section1 />

      <Section2 />

      <Section3Banner />
      <Test2/>

      <Section4 showComponent={showComponent} />

      <Section5 />
      <Section5Banner />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />

      {/* <Section3New/> */}
    </div>
  );
}

export default DesktopComponent;
