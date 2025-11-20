import React from "react";
import Slider from "react-slick";

export default function ConsultingPage() {
  const specialties = [
    "Digestive Health",
    "Skin & Hair Care",
    "Joint & Muscle Pain",
    "Stress & Sleep",
    "Women's Health",
    "Weight Management",
  ];
  
  const doctors = [
    {
      name: "Dr. Asha Verma",
      experience: "12 years",
      degree: "BAMS, MD Ayurveda",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Rohan Iyer",
      experience: "15 years",
      degree: "BAMS, PGD Panchakarma",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Neha Sharma",
      experience: "10 years",
      degree: "BAMS, Ayurvedic Diet Specialist",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Karan Mehta",
      experience: "18 years",
      degree: "Ayurvedic Physician",
      img: "https://via.placeholder.com/150",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="w-full flex flex-col text-[#efe9cb] items-center text-gray-900">
      {/* Hero Section */}
      <section className="w-full h-[60vh] text-[#efe9cb] flex flex-col justify-center items-center bg-[#4f6339] text-center p-6">
        <h1 className="text-5xl font-bold mb-4">Book an Online Ayurveda Consultation</h1>
        <p className="text-xl max-w-2xl">Connect with certified Ayurvedic doctors for personalized treatment based on your dosha and health goals.</p>
        <button className="mt-6 px-6 py-3 rounded-full bg-[#834d6f] text-[#efe9cb] font-semibold hover:bg-green-700">Start Consultation</button>
      </section>

      {/* Speciality Section */}
      <section className="w-full max-w-screen h-[80vh] mx-auto py-12 px-8 bg-[#eee9cc] text-[#4f6339]">
        <h2 className="text-3xl font-semibold mb-6 text-center">Specialties We Cover</h2>
        <Slider {...sliderSettings}>
          {specialties.map((item, index) => (
            <div key={index} className="p-4 ">
              <div className="bg-green-50 h-[40vh] shadow-md rounded-xl p-6 text-center text-lg font-medium">
                {item}
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Dosha Section */}
      <section className="w-full rounded-2xl bg-[#eee9cc] text-[#eee9cc] py-8 px-4 flex flex-col items-center">
        <div className="rounded-2xl w-[97%] bg-gradient-to-r from-[#834d6f]/70 to-[#834d6f] px-4 py-4">
            <h2 className="text-4xl text-[#eee9cc] font-bold mb-4">Find Your Dosha</h2>
            <p className="max-w-5xl text-xl font-semibold  mb-8">Discover your body constitution (Vata, Pitta, Kapha) and book a consultation tailored to your unique needs.</p>
            <button className="px-6 py-3 rounded-full bg-[#4f6339] text-white font-semibold hover:bg-green-700">Take Dosha Test</button>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="w-full py-16 px-4 bg-[#efe9cb]">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Expert Doctors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {doctors.map((doc, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white p-6 shadow-md rounded-2xl border border-gray-200">
              <img src={doc.img} alt={doc.name} className="w-32 h-32 rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold">{doc.name}</h3>
              <p className="text-sm text-gray-600">Experience: {doc.experience}</p>
              <p className="text-sm text-gray-600 mb-4">{doc.degree}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="py-16">
        <button className="px-8 py-4 rounded-full bg-green-700 text-white text-lg font-bold hover:bg-green-800">
          Ready to Take Your Consulting Test
        </button>
      </div>
    </div>
  );
}
