

import FAQ from "@/Components/Faq";
import { Steps } from "@/Components/Consulting/Steps";
import { CommonSymtoms } from "@/Components/Consulting/CommonSymtoms";
import { Specialities } from "@/Components/Consulting/Specialities";
import ConsultationForm from "@/Components/Consulting/DetailsForm";

export default function ConsultingPage() {

  const doctors = [
    {
      name: "Dr. Asha Verma",
      experience: "12 years",
      degree: "BAMS, MD Ayurveda",
      img: "./assests/consulting/demo.JPG",
    },
    {
      name: "Dr. Rohan Iyer",
      experience: "15 years",
      degree: "BAMS, PGD Panchakarma",
      img: "./assests/consulting/demo.JPG",
    },
    {
      name: "Dr. Neha Sharma",
      experience: "10 years",
      degree: "BAMS, Ayurvedic Diet Specialist",
      img: "./assests/consulting/demo.JPG",
    },
    {
      name: "Dr. Karan Mehta",
      experience: "18 years",
      degree: "Ayurvedic Physician",
      img: "./assests/consulting/demo.JPG",
    },
  ];

 

  return (
    <div className="w-full flex flex-col items-center bg-[#efe9cb] text-[#4f6339] overflow-hidden">

      {/* HERO SECTION */}
      <section className="w-full h-screen flex flex-col justify-center items-center text-center px-6 bg-[#efe9cb] ">
        <h1 className="text-5xl font-bold max-w-3xl leading-tight">
          Personalized Ayurveda Consultation for Your Mind, Body & Health
        </h1>
        <p className="text-lg mt-4 max-w-2xl opacity-90">
          Talk to certified Ayurvedic doctors for root-cause based healing. 100% personalized advice.
        </p>

        <button className="mt-8 px-8 py-4 rounded-full bg-[#834d6f] text-[#efe9cb]  font-bold text-lg hover:scale-105 transition-all shadow-md">
          Start Your Wellness Journey
        </button>
      </section>

      {/* WHY CHOOSE US */}
      <section className="w-full py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Why People Trust Vedara</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[ 
            { title: "Certified Doctors", desc: "Experienced BAMS & MD Ayurveda specialists.",img:"/assests/consulting/doctor.png" },
            { title: "Root-Cause Healing", desc: "Personalized treatment based on your dosha & history." ,img:"/assests/consulting/holistic.png"},
            { title: "Holistic Approach", desc: "Mind, body, lifestyle & diet guidance together.",img:"/assests/consulting/holis.png" }
          ].map((card, i) => (
            <div key={i} className="p-6 rounded-xl shadow-md bg-white border hover:-translate-y-1 transition">
              <img className="" src={card.img} alt="" />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm opacity-80">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
      

      {/* SPECIALTIES */}
      <Specialities/>
      
      {/* common symptoms */}
      <CommonSymtoms/>
      

      {/* DOSHA TEST */}
      <section className="w-full py-8 px-6 bg-[#4f6339] text-[#efe9cb] text-center rounded-2xl max-w-6xl mt-10">
        <h2 className="text-5xl font-bold mb-4">Find Your Dosha</h2>
        <p className="max-w-3xl mx-auto text-xl opacity-90 mb-8">
          Discover whether you're Vata, Pitta or Kapha — and get a personalized treatment plan.
        </p>
        <button className="px-8 py-4 bg-[#834d6f]  rounded-full font-bold hover:scale-105 transition">
          Take Dosha Test
        </button>
      </section>

      {/* steps to your test */}
      <Steps/>


      {/* why ayurdeva works  */}
      <section className="w-full py-20 px-6 bg-[#4f6339] text-[#efe9cb] text-center">
        <h2 className="text-4xl font-bold mb-6">Why Ayurveda Actually Works</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90 mb-12">
          Ayurveda treats the root cause through personalized healing — combining body type, lifestyle, digestion, and mental health.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[{
            t: "Holistic Diagnosis",
            d: "Doctors study your lifestyle, digestion, sleep, stress and dosha."},
            {t: "Root-Cause Healing", d: "We treat internal imbalance, not just symptoms."},
            {t: "Natural & Side-Effect Free", d: "Based on herbs, diet & habits that restore balance."},
          ].map((c, i) => (
            <div key={i} className="p-6 bg-[#efe9cb] text-[#4f6339] rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{c.t}</h3>
              <p className="opacity-90">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCTORS SECTION */}
      <section className="w-full py-20 px-6 text-center bg-[#efe9cb]">
        <h2 className="text-4xl font-bold mb-10">Meet Our Expert Doctors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {doctors.map((doc, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border hover:-translate-y-1 transition">
              <img src={doc.img} alt={doc.name} className="w-28 h-28 mx-auto rounded-full object-cover mb-4" />
              <h3 className="text-xl font-semibold">{doc.name}</h3>
              <p className="text-sm opacity-80">Experience: {doc.experience}</p>
              <p className="text-sm opacity-80">{doc.degree}</p>
            </div>
          ))}
        </div>
      </section>
      <ConsultationForm/>

      {/* CTA */}
      {/* <div className="py-16 text-center">
        <button className="px-10 py-5 bg-[#4f6339] text-[#efe9cb] text-xl rounded-full font-bold hover:bg-[#3e502e] transition shadow-lg">
          Book Your Consultation Now
        </button>
      </div> */}
      {/* FAQ SECTION */}
      <FAQ/>
    </div>
  );
}







