import React from "react";

function AdvisoryBoard(props) {
  return (
    <section className="responsive py-10 mb-20">
      <h3>Advisory Board</h3>

      <div className="mt-10 flex justify-between gap-10 min-h-px-200">
        <div className="w-1/3">
          <div
            className={`bg-red-400 bg-[url('/agribusiness.png')] h-full w-full bg-cover bg-center bg-no-repeat`}
          />
          <p className="text-center mt-5">Mrs Emma Simpey</p>
          <p className="text-center">Human Resource Manager</p>
        </div>

        <div className="w-1/3">
          <div
            className={`bg-red-400 bg-[url('/agribusiness.png')] h-full w-full bg-cover bg-center bg-no-repeat`}
          />
          <p className="text-center mt-5">Mr. Emmanuel Charles Annoh Jnr.</p>
          <p className="text-center">IT and Technical Advisor</p>
        </div>

        <div className="w-1/3">
          <div
            className={`bg-red-400 bg-[url('/agribusiness.png')] h-full w-full bg-cover bg-center bg-no-repeat`}
          />
          <p className="text-center mt-5">Mrs Pearl Tetteh-Larbi</p>
          <p className="text-center">Financial Manager</p>
        </div>
      </div>
    </section>
  );
}

export default AdvisoryBoard;
