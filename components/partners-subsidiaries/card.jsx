import React from "react";

function Card(props) {
  return (
    <div className="h-px-170 bg-white flex items-center justify-center">
      {!props.name ? (
        <>
          <div
            className={`${props.backgroundImage} h-1/2 w-5/6 bg-center bg-contain bg-no-repeat`}
          />
        </>
      ) : (
        <>
          <div className="text-center w-full block">
            {props.name}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
