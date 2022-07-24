import React from "react";
import About from "../components/about/about";
import AdvisoryBoard from "../components/advisory-board/advisory-board";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import Meta from "../components/meta/meta";
import Nav from "../components/nav/nav";
import OurServices from "../components/our-service/our-services";
import OurTeam from "../components/our-team/our-team";
import OurTestimonials from "../components/our-testimonials/our-testimonials";
import PartnersAndSubsidiaries from "../components/partners-subsidiaries/partners-subsidiaries";
import SideBar from "../components/utilities/sidebar";


export default function Home() {
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <>
      <Meta title="Greepec Consult Ghana" />
      <Nav setSidebar={setSidebar}/>
      <Hero />
      <About />
      <OurServices/>
      <PartnersAndSubsidiaries/>
      <OurTestimonials/>
      <OurTeam/>
      <AdvisoryBoard/>
      <Footer/>
      <SideBar sidebar={sidebar} setSidebar={setSidebar}/>

    
    </>
  );
}
