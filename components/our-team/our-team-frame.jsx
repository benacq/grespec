import React from "react";

function OurTeamFrame(props) {
  return (
    <section>
      <div className="mt-10 flex justify-between gap-10 min-h-px-200">
        <div className="w-1/3">
          <div
            className={"bg-red-400 ${props.backgroundImage} h-full w-full bg-cover bg-center bg-no-repeat"}
          />
        </div>

        <div className="w-1/3">
          <h4 className="font-montserrat font-semibold">{props.name}</h4>
          <h4 className="font-montserrat font-semibold">{props.title}</h4>
          <p>{props.description}</p>
        </div>

        <div className="w-1/3">{props.descriptionContd}</div>
      </div>
    </section>
  );
}

export default OurTeamFrame;
