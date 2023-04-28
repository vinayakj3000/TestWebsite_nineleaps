import React, { useEffect, useRef, useState } from "react";
import NavbarMobile from "../Navbar/NavbarMobile";
import Section0Mobile from "../SectionsMobile/Section0Mobile";
import Section0MobilePart2 from "../SectionsMobile/Section0MobilePart2";
import Section1 from "../Sections/Section1";
import Section2 from "../Sections/Section2";
import Section3BannerMobile from "../SectionsMobile/Section3BannerMobile";
import Section4Mobile from "../SectionsMobile/Section4Mobile";
import Section5Mobile from "../SectionsMobile/Section5Mobile";
import Section5BannerMobile from "../SectionsMobile/Section5BannerMobile";
import Section6Mobile from "../SectionsMobile/Section6Mobile";
import Section7 from "../Sections/Section7";
import Section8Mobile from "../SectionsMobile/Section8Mobile";
import FooterMobile from "../Footer/FooterMobile";
import ClientBannerMobile from "../Assets/ClientBannerMobile.png";
import Section3mobile from "../SectionsMobile/Section3mobile";


function MobileComponent() {

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
      <Section3mobile />

      <Section4Mobile />
      <Section5Mobile />
      <Section5BannerMobile />
      <Section6Mobile />
      <Section7 />
      <Section8Mobile showComponent={showComponent} />
      <FooterMobile showComponent={showComponent} />
    </div>
  );
}

export default MobileComponent;
