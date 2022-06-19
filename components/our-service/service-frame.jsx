import React from "react";

function ServiceFrame(props) {
  return (
    <section className={`mt-10 flex justify-between gap-10 min-h-px-350 ${props.flexDirection}`}>
      <div className="w-1/2">
        <div className={`${props.bgImg} h-full w-full bg-contain bg-center bg-no-repeat`} />
      </div>

      <div className="w-1/2 flex flex-col justify-center">
        <h3 className="mb-5">{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </section>
  );
}

export default ServiceFrame;
