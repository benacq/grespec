import About from "../components/about/about";
import AdvisoryBoard from "../components/advisory-board/advisory-board";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import Nav from "../components/nav/nav";
import OurServices from "../components/our-service/our-services";
import OurTeam from "../components/our-team/our-team";
import OurTestimonials from "../components/our-testimonials/our-testimonials";
import PartnersAndSubsidiaries from "../components/partners-subsidiaries/partners-subsidiaries";
import SlickSlider from "../components/utilities/slick";
import Slider from "../components/utilities/slider";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <OurServices/>
      {/* <SlickSlider/> */}
      {/* <Slider/> */}
      <PartnersAndSubsidiaries/>
      <OurTestimonials/>
      <OurTeam/>
      <AdvisoryBoard/>
      <Footer/>
    </>
  );
}
