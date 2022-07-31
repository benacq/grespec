import React from "react";
import SlickSlider from "../utilities/slick";
import Slider from "../utilities/slider";
import Card from "./card";

function PartnersAndSubsidiaries() {
  return (
    <section className="responsive py-10 bg-custom-gray-light-secondary">
      <h3>Our Business Clients and Partners</h3>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-10">
        <div className="md:w-1/3">
          <Card backgroundImage={"bg-[url('/client-1.png')]"} />
        </div>

        <div className="md:w-1/3">
          <Card backgroundImage={"bg-[url('/client-2.png')]"} />
        </div>

        <div className="md:w-1/3">
          <Card backgroundImage={"bg-[url('/client-3.png')]"} />
        </div>
      </div>

      {/* <div className="mt-10" /> */}

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-10">
        <div className="md:w-1/3">
          <Card backgroundImage={"bg-[url('/benita-ent.jpg')]"} />
        </div>

        <div className="md:w-1/3">
          <Card backgroundImage={"bg-[url('/keep-gh-beautiful.jpg')]"} />
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-10">
        <div className="md:w-1/3">
          <Card backgroundImage={"bg-[url('/client-4.png')]"} />
        </div>

        <div className="md:w-1/3">
          <Card backgroundImage={"bg-[url('/client-5.png')]"} />
        </div>

        <div className="md:w-1/3">
          <Card backgroundImage={"bg-[url('/client-6.png')]"} />
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-10">
        <div className="md:w-1/3">
          <Card
            link="social.yecommunity.com/page/ye-community"
            name={"Ye! Community"}
          />
        </div>

        <div className="md:w-1/3">
          <Card
            link="www.genglobal.org"
            name={"Global Entrepreneurship Network"}
          />
        </div>
      </div>

      <div className="flex-grow border-t my-16 border-gray-200" />

      <div>
        <h3 className="mb-8">Our subsidiaries</h3>

        <div className="grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-3 justify-between gap-x-10 gap-y-5 mt-16">
          <Card backgroundImage={"bg-[url('/subsidiary-1.png')]"} />
          <Card backgroundImage={"bg-[url('/subsidiary-2.png')]"} />
          <Card backgroundImage={"bg-[url('/subsidiary-3.png')]"} />
        </div>
      </div>
    </section>
  );
}

export default PartnersAndSubsidiaries;
