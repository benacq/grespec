import React from "react";
import ServiceFrame from "./service-frame";

function OurServices() {
  return (
    <section className="responsive py-10 bg-custom-gray-light" id={"services"}>
      <h3 className="mb-5">Our Services</h3>

      <ServiceFrame
        bgImg={"bg-[url('/agribusiness.png')]"}
        title="Agribusiness"
        content="We have established a viable, fair and sustainable farming trade system that can replace Ghana’s’ exploitative methods used in the Agriculture Industry with much focus on poultry, animal nutrition and aquaculture sectors.
        Our core value is to promote sustainability in the animal farming industry and be the best in terms of agricultural farming. We do not compromise on the quality of farm products we supply to our clients. We employ the usage of technology and right packaging in order to deliver the best quality of produce on the market."
      />

      <div className="mt-20" />

      <ServiceFrame
        bgImg={"bg-[url('/landscape.png')]"}
        title="Landscape Development"
        content="We promote the general development of landscape services across the world at large. We believe that the extensiveness of planting depends on the size of the building and the grounds that are left, the height of the building and the prominence of other features of the building. 
        Thus, the available space will connect to the home or other structures in the surrounding areas. We also source out advisory services to clients on the right choice of plant materials suitable for landscape development. We are able to achieve this by enhancing beauty through landscaping.
        We are committed to building institutions’ capability and helping them achieve growth and performance excellence.
        We work with various large, medium and small sized organizations in Ghana, including banks and other institutions, to continue to hone their capability in achieving sustainable high performance.
Our top-rated “gardening services” based on our expertise, efficiency, knowledge and excellence have continued to help organizations achieve their performance goals and achieve profound high performance. Our services have therefore continued to help organizations achieve excellence and become more competitive in the global marketplace."
        flexDirection="flex-row-reverse"
      />

      <div className="mt-20" />

      <ServiceFrame
        bgImg={"bg-[url('/business-consulting.png')]"}
        title="Business Consulting  and Rental Services"
        content="We provide family counseling, business consulting and research services to individuals and corporate organizations.
        We also offer home rents and property lease to businesses and prospective clients"
      />

      <div className="flex-grow border-t my-20 border-gray-200" />

      <div className="mt-8" />

      <div>
        <h3 className="mb-5">Other Services</h3>
        <ServiceFrame
          bgImg={"bg-[url('/it-solutions.png')]"}
          title="IT Solutions and Training"
          content="We are also proficient in the field of Information Communication and Technology (ICT). Our expertise in the area of computer training and data management in Ghana has ear-marked us as a reliable business organization in Ghana. We provide youth with vocational training and entrepreneurial skills.
          We partner with the best data centers in the country and offer advanced IT solutions that work within your budget parameters.
We have a strong team that ensures to maintain and complete any technical update that is required from time to time."
          flexDirection="flex-row-reverse"
        />

        <div className="mt-8" />

        <ServiceFrame
          bgImg={"bg-[url('/clothing.png')]"}
          title="Greepec Clothing"
          content="We are a producer of African wear for children and sell African print materials. We deal in the production of quality and affordable designed clothes in the country. Greepec Clothing distributes (wholesale &retail) children’s wear to schools, offices, hospitals, and personal homes. Our clothing materials are of the highest quality, most indigenous brand because we settle for nothing less.
          Our African wear has always been in the forefront of the fashion and design wave.
          Innovative clothing, state of the art designs, quality assurance and industry expertise are the basis for our past and future successes. Our customers depend on the quality of our products. Our commitment towards higher standards is the foundation of our customer's trust in Greepec Clothing. We stand behind our product, our service and our word."
        />
      </div>
    </section>
  );
}

export default OurServices;
