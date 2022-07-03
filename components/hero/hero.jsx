import React from "react";

function Hero({ cycleOpen }) {
  return (
    <div
      className="h-screen relative bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat"
      id={"home"}
    >
      <div className="absolute w-full h-full bg-custom-transparent z-10">
        <section className="responsive">
          <div className="mt-44 sm:mt-28 md:mt-40">

            <h1 className="leading-hero-spaced relative text-white text-custom-lg xsm:text-custom-xlg sm:text-custom-xxlg-sm md:text-custom-xxlg-md lg:text-custom-xxlg capitalize">
              we offer professional advice, <br />
              guidance, and solutions to <br /> your businesses
            </h1>

            <h5 className="text-custom-xsm md:text-custom-sm sm:w-3/4 md:w-2/3 lg:w-1/2 mt-5 text-white">
              We addresses the immediate and long-term development needs of
              people by providing consultancy services and training in
              agribusiness amongst others.
            </h5>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
