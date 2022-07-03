import React from "react";

function AdvisoryBoard() {
  return (
    <section className="responsive py-10">
      <div className="flex-grow border-t my-10 border-gray-200" />

      <h3>Advisory Board</h3>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-10 min-h-px-350">
        <div className="md:w-1/3">
          <div
            className={
              "bg-[url('/agribusiness.png')] h-60 md:h-3/4 w-full bg-cover bg-center bg-no-repeat"
            }
          />
          <p className="text-center mt-5">Dr. Charles Emmanuel Annoh</p>
          <p className="text-center">Chairman, Research Consultant</p>
        </div>

        <div className="md:w-1/3">
          <div
            className={
              "bg-[url('/agribusiness.png')] h-60 md:h-3/4 w-full bg-cover bg-center bg-no-repeat"
            }
          />
          <p className="text-center mt-5">Mr. Ebenezer Boahene Annoh</p>
          <p className="text-center">CEO/ Entrepreneur</p>
        </div>
      </div>

      <div className="mt-20" />

      <div className="mt-10 flex flex-col md:flex-row justify-between gap-10 min-h-px-350">
        <div className="md:w-1/3">
          <div
            className={`bg-[url('/agribusiness.png')] h-60 md:h-3/4 w-full bg-cover bg-center bg-no-repeat`}
          />
          <p className="text-center mt-5">Mrs Emma Simpey</p>
          <p className="text-center">Human Resource Manager</p>
        </div>

        <div className="md:w-1/3">
          <div
            className={
              "bg-[url('/agribusiness.png')] h-60 md:h-3/4 w-full bg-cover bg-center bg-no-repeat"
            }
          />
          <p className="text-center mt-5">Mr. Emmanuel Charles Annoh Jnr.</p>
          <p className="text-center">IT and Technical Advisor</p>
        </div>

        <div className="md:w-1/3">
          <div
            className={
              "bg-[url('/agribusiness.png')] h-60 md:h-3/4 w-full bg-cover bg-center bg-no-repeat"
            }
          />
          <p className="text-center mt-5">Mrs Pearl Tetteh-Larbi</p>
          <p className="text-center">Financial Manager</p>
        </div>
      </div>
    </section>
  );
}

export default AdvisoryBoard;
