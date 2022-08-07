import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

function About() {
  return (
    <section className="responsive py-10" id="about">
      <h2>Our Story</h2>

      <section className="lg:hidden">
        <ReactReadMoreReadLess
          charLimit={438}
          readMoreClassName="text-blue-500"
          readLessClassName="text-blue-500"
          readMoreText={"Read more"}
          readLessText={"Read less"}
        >
          Over the years, the response to capacity development associated with
          its sustainability has been a major concern on the minds of the ANNOH
          FAMILY. Our passion to solve this major issue, and enhance community
          growth led to the formation of GREEPEC (an acronym of names of family
          members). GREEPEC CONSULT was registered in 2013 with a policy
          direction; to be a self-sustaining private business brand within the
          next ten years in Ghana. In our business journey, we have blossomed
          from an idea stage into several business innovation and
          solutions.Despite our unfolding setbacks and challenges, the Lord has
          been good and faithful. Our mission to address the immediate and
          long-term development needs of people through consultancy services and
          training has yielded good results. Our vision is to develop a society
          in which businesses are empowered to achieve their full potential and
          contribute to the development of its community and country. Our
          achievement and successes over the couple of years have birthed these
          fruits namely: GREEPEC CONSULT, GREEPEC CLOTHING, GREEPEC FARMS, and
          GREEPEC IT SOLUTIONS as well as the FINE CHOICE SUPERMARKET. Our
          cordial relationship with clients has opened the gateway to various
          business opportunities across the global fraternity in India,
          Malaysia, Germany, Bulgaria, Kenya and China amongst others. By 2023,
          we hope to register all of our business brands and patent our logos
          while growing them into a medium- large scale companies.
        </ReactReadMoreReadLess>
      </section>

      <section className="mt-5 hidden lg:flex justify-between gap-20">
        <div className="lg:w-1/2 flex flex-col gap-2">
          <p>
            Over the years, the response to capacity development associated with
            its sustainability has been a major concern on the minds of the
            ANNOH FAMILY. Our passion to solve this major issue, and enhance
            community growth led to the formation of GREEPEC (an acronym of
            names of family members). GREEPEC CONSULT was registered in 2013
            with a policy direction; to be a self-sustaining private business
            brand within the next five years in Ghana.
          </p>

          <p>
            In our business journey, we have blossomed from an idea stage into
            several business innovation and solutions.Despite our unfolding
            setbacks and challenges, the Lord has been good and faithful. Our
            mission to address the immediate and long-term development needs of
            people through consultancy services and training has yielded good
            results.
          </p>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-2">
          <p>
            Our vision is to develop a society in which businesses are empowered
            to achieve their full potential and contribute to the development of
            its community and country. Our achievement and successes over the
            couple of years have birthed these fruits namely: GREEPEC CONSULT,
            GREEPEC CLOTHING, GREEPEC FARMS, and GREEPEC IT SOLUTIONS as well as
            the FINE CHOICE SUPERMARKET.
          </p>

          <p>
            Our cordial relationship with clients has opened the gateway to
            various business opportunities across the global fraternity in
            India, Malaysia, Germany, Bulgaria, Kenya and China amongst others.
            By 2023, we hope to register all of our business brands and patent
            our logos while growing them into a medium- large scale companies.
          </p>
        </div>
      </section>

      <div className=" min-h-px-400 w-full relative bg-[url('/grespec-plant.jpg')] bg-contain md:bg-cover bg-no-repeat mt-10" />
      <div className="flex-grow border-t my-10 border-gray-200" />

      <section className="mt-10 flex flex-col md:flex-row justify-between gap-20 min-h-px-400">
        <div className="md:w-1/2">
          <div className="bg-[url('/img-1.png')] bg-contain bg-center bg-no-repeat h-60 md:h-full" />
        </div>

        <div className="md:w-1/2 flex flex-col gap-2">
          <div>
            <h3 className="mb-5">Vision</h3>
            <p>
              Our vision is to develop a society in which businesses are
              empowered to achieve their full potential and contribute to the
              development of its community and country.
            </p>
          </div>

          <div>
            <h3 className="mb-5 mt-8">Mission</h3>
            <p>
              Our mission is to address the immediate and long-term development
              needs of people through consultancy services and training
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 mb-10">
        <h3 className="mb-5">Our Values</h3>

        <div className="grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-4 justify-between gap-x-10 gap-y-10">
          <div>
            <div
              className="bg-[url('/shield.png')] bg-light-cream h-60 w-60
            md:h-36 md:w-36 m-auto shadow-md bg-center bg-no-repeat"
            />
            <p className="text-center mt-5">Quality Delivery</p>
          </div>

          <div>
            <div
              className="bg-[url('/value.png')] bg-light-cream h-60 w-60
            md:h-36 md:w-36 m-auto shadow-md bg-cover bg-no-repeat"
            />
            <p className="text-center mt-5">Customer Service</p>
          </div>
          <div>
            <div
              className="bg-[url('/excellence.png')] bg-light-cream h-60 w-60
            md:h-36 md:w-36 m-auto shadow-md bg-cover bg-no-repeat"
            />
            <p className="text-center mt-5">Excellence</p>
          </div>
          <div>
            <div
              className="bg-[url('/power.png')] bg-light-cream h-60 w-60
            md:h-36 md:w-36 m-auto shadow-md bg-cover bg-no-repeat"
            />
            <p className="text-center mt-5">Passion</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
