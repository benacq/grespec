import React from "react";
import Card from "./card";

function PartnersAndSubsidiaries() {
  return (
    <section className="responsive py-10 bg-custom-gray-light-secondary">
      
      <h3>Our Business Clients and Partners</h3>

      <div className="grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-3 justify-between gap-x-10 gap-y-5 mt-16">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="flex-grow border-t my-16 border-gray-200" />

      <div>
        <h3 className="mb-8">Our subsidiaries</h3>

        <div className="grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-3 justify-between gap-x-10 gap-y-5 mt-16">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

export default PartnersAndSubsidiaries;
