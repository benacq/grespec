import React from "react";
import ServiceFrame from "./service-frame";

function OurServices() {
  return (
    <section className="responsive py-10 bg-custom-gray-light">
      <h3 className="mb-5">Our Services</h3>

      <ServiceFrame
        bgImg={"bg-[url('/agribusiness.png')]"}
        title="Agribusiness"
        content="We have established a viable, fair and sustainable farming trade system that can replace Ghana’s exploitative methods used in the Agriculture Industry with much focus on poultry, animal nutrition and aquaculture sectors."
      />

      <div className="mt-20" />

      <ServiceFrame
        bgImg={"bg-[url('/landscape.png')]"}
        title="Landscape Development"
        content="We promote the general development of landscape services across the world at large. We believe that the extensiveness of planting depends on the size of the building and the grounds that are left, the height of the building and the prominence of other features of the building."
        flexDirection="flex-row-reverse"
      />

      <div className="mt-20" />

      <ServiceFrame
        bgImg={"bg-[url('/business-consulting.png')]"}
        title="Business Consulting  and Rental Services"
        content="We provide family counseling, business consulting and research services to individuals and corporate organizations. We also offer home rents and property lease to businesses and prospective clients."
      />

      <div className="flex-grow border-t my-20 border-gray-200" />

      <div className="mt-8" />

      <div>
        <h3 className="mb-5">Other Services</h3>
        <ServiceFrame
          bgImg={"bg-[url('/it-solutions.png')]"}
          title="IT Solutions and Training"
          content="We are also proficient in the field of Information Communication and Technology (ICT). Our expertise in the area of computer training and data management in Ghana has ear-marked us as a reliable business organization in Ghana."
          flexDirection="flex-row-reverse"
        />

        <div className="mt-8" />

        <ServiceFrame
          bgImg={"bg-[url('/clothing.png')]"}
          title="Greepec Clothing"
          content="We are a producer of African wear for children and sell African print materials. We deal in the production of quality and affordable designed clothes in the country. Greepec Clothing distributes (wholesale &retail) children’s wear to schools, offices, hospitals, and personal homes."
        />
      </div>
    </section>
  );
}

export default OurServices;
