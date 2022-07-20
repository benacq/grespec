import React from "react";

function OurTeamFrame(props) {
  return (
    <section>
      <div className="mt-10 flex flex-col md:flex-row justify-between gap-10 min-h-px-200">
        <div className="md:w-1/3">
          <div
            className={`${props.backgroundImage} h-64 md:h-full w-full bg-cover bg-center bg-no-repeat`}
          />
        </div>

        <div className="md:w-1/3">
          <h4 className="font-montserrat font-semibold">{props.name}</h4>
          <h4 className="font-montserrat font-semibold">{props.title}</h4>
          <p>{props.description}</p>
        </div>

        <div className="md:w-1/3">{props.descriptionContd}</div>
      </div>
    </section>
  );
}

export default OurTeamFrame;
