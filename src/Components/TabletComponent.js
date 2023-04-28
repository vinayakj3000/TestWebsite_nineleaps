import React, { useEffect, useRef, useState } from "react";
import NavbarMobile from "../Navbar/NavbarMobile";
import Section0Mobile from "../SectionsMobile/Section0Mobile";
import Section0MobilePart2 from "../SectionsMobile/Section0MobilePart2";
import Section1 from "../Sections/Section1";
import Section2 from "../Sections/Section2";
import Section3BannerMobile from "../SectionsMobile/Section3BannerMobile";
import Section4 from "../Sections/Section4";
import Section5 from "../Sections/Section5";
import Section5BannerMobile from "../SectionsMobile/Section5BannerMobile";
import Section6Mobile from "../SectionsMobile/Section6Mobile";
import Section7 from "../Sections/Section7";
import Section8Mobile from "../SectionsMobile/Section8Mobile";
import FooterMobile from "../Footer/FooterMobile";
import clientBanner from "../Assets/ClientBanner.png";
import Test2 from "../Sections/Test2";

function TabletComponent() {
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
    <div ref={ref}>
      <NavbarMobile />
      <Section0Mobile />
      <Section0MobilePart2 />
      <img src={clientBanner} alt="clientBanner" className="ClientBanner"></img>
      <Section1 showComponent={showComponent} />
      <Section2 />
      <Section3BannerMobile />
      {/* <Test2 /> */}
      <Section4 showComponent={showComponentTab} />
      <Section5 />
      <Section5BannerMobile />
      <Section6Mobile />
      <Section7 />
      <Section8Mobile showComponent={showComponent} />
      <FooterMobile showComponent={showComponent} />
    </div>
  );
}

export default TabletComponent;
