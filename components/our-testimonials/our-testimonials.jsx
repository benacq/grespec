import React from "react";

function OurTestimonials() {
  return (
    <section className="responsive py-10 bg-custom-gray-light">
      <h3>Our Testimonial and Awards</h3>

      <div className="mt-20 grid-cols-1 grid lg:grid-cols-2 justify-between gap-10">
        <div className="items-center flex">
          <div
            className={
              "bg-[url('/condecoration.png')] h-14 w-1/6 bg-contain bg-no-repeat"
            }
          />
          <h4 className="w-10/12">Finalist in ENGINE 2015 Competition</h4>
        </div>

        <div className="items-center flex">
          <div
            className={
              "bg-[url('/condecoration.png')] h-14 w-1/6 bg-contain bg-no-repeat"
            }
          />
          <h4 className="w-10/12">
            Finalist in TOTAL STARTUPPER OF THE YEAR 2016 Competition
          </h4>
        </div>

        <div className="items-center flex">
          <div
            className={
              "bg-[url('/winner.png')] h-14 w-1/6 bg-contain bg-no-repeat"
            }
          />
          <h4 className="w-10/12">
            Semi-Finalist in MCDAN ENTREPRENEURSHIP CHALLENGE 2018
          </h4>
        </div>

        <div className="items-center flex">
          <div
            className={
              "bg-[url('/award.png')] self-center h-14 w-1/6 bg-contain bg-no-repeat"
            }
          />
          <h4 className="w-10/12">
            Landscaping Consultancy of the Year 2018, West Africa, African
            Excellence Awards
          </h4>
        </div>
      </div>
    </section>
  );
}

export default OurTestimonials;
