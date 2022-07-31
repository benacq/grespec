import Link from "next/link";
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
            {props.link ? (
              <>
                <Link href={`https://${props.link}`}  passHref={true}>
                  <a target="_blank">{props.name}</a>
                </Link>
              </>
            ) : (
              <>{props.name}</>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
