import About from "../components/about/about";
import AdvisoryBoard from "../components/advisory-board/advisory-board";
import Hero from "../components/hero/hero";
import Nav from "../components/nav/nav";
import OurServices from "../components/our-service/our-services";
import OurTeam from "../components/our-team/our-team";
import OurTestimonials from "../components/our-testimonials/our-testimonials";
import PartnersAndSubsidiaries from "../components/partners-subsidiaries/partners-subsidiaries";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <OurServices/>
      <PartnersAndSubsidiaries/>
      <OurTestimonials/>
      <OurTeam/>
      <AdvisoryBoard/>
    </>
  );
}
