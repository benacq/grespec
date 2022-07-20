import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Card from "../partners-subsidiaries/card";

export default function SlickSlider(props) {
  return (
    <>
      <Slider
        className="w-full bg-green-500"
        slidesToShow={3}
        dots
        infinite={false}
        swipeToSlide={true}
        focusOnSelect={true}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              arrows: true,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ]}
      >
        <div className="w-full flex bg-red-400">
          <Card />
          <Card />
        </div>

        {/*
        <Card />
        <Card />
        <Card /> */}

        {/* <div>
          <div className="cursor-pointer h-custom-200 w-custom-240 m-auto flex justify-center items-center transition-all hover:scale-105 rounded-lg">
            <div className="h-36 w-36 relative">
              <Image
                layout="fill"
                loading="lazy"
                objectFit="contain"
                src={"/solar-panel.png"}
                alt="solar energy"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="cursor-pointer h-custom-200 w-custom-240 m-auto flex justify-center items-center transition-all hover:scale-105 rounded-lg">
            <div className="h-36 w-36 relative">
              <Image
                layout="fill"
                loading="lazy"
                objectFit="contain"
                src={"/wind-mill.png"}
                alt="wind energy"
              />
            </div>
          </div>
        </div> */}

        {/* {props.children} */}
      </Slider>
    </>
  );
}
