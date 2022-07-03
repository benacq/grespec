import React from "react";

function ServiceFrame(props) {
  return (
    <div>
      <h3 className="mt-5 md:hidden">{props.title}</h3>
      <section
        className={`md:mt-10 md:flex justify-between gap-10 min-h-px-350 ${props.flexDirection}`}
      >
        <div className="md:w-1/2">
          <div
            className={`${props.bgImg} h-64 md:h-full w-full bg-cover md:bg-contain bg-center bg-no-repeat`}
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center">
          <h3 className="mb-5 hidden md:block">{props.title}</h3>
          <p>{props.content}</p>
        </div>
      </section>
    </div>
  );
}

export default ServiceFrame;
