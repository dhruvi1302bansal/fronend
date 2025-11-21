import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Specialities = () => {
     const data = [
    {
      id: 1,
      title: "Vedara Gut Balance Program",
      img: "./assests/consulting/gut2.jpg",
    },
    {
      id: 2,
      title: "Vedara Hormonal Harmony Program",
      img: "./assests/consulting/hormonal.png",
    },
    {
      id: 3,
      title: "Vedara MindEase Program",
      img: "./assests/consulting/mindease.png",
    },
    {
      id: 4,
      title: "Vedara Skin Detox Program",
      img: "./assests/consulting/skin.png",
    },
    {
      id: 5,
      title: "Vedara Migraine Relief Protocol",
      img: "./assests/consulting/migrane.png",
    },
    {
      id: 6,
      title: "Vedara Weight Reset Program",
      img: "./assests/consulting/weight.png",
    },
    {
      id: 7,
      title: "Vedara Thyroid Balance Program",
      img: "./assests/consulting/thyroid.png",
    },
    {
      id: 8,
      title: "Vedara Allergy & Immunity Program",
      img: "./assests/consulting/allergy.png",
    },
    {
      id: 9,
      title: "Vedara HairRevive Program",
      img: "./assests/consulting/hair.png",
    },
    {
      id: 10,
      title: "Vedara Reproductive Wellness Program",
      img: "./assests/consulting/reproductive.png",
    },
  ];
   const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <section className="w-full py-16 px-8 ">
            <h2 className="text-4xl font-bold text-center mb-8">Our Healing Programs</h2>
    
            <Slider {...sliderSettings}>
              {data.map(item => (
                <div key={item.id} className="px-4">
                  <div className="group bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-64 object-contain transform transition duration-500 group-hover:scale-105"
                    />
                    <p className="text-center py-4 font-semibold">{item.title}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
  )
}
