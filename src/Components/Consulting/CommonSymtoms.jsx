import React from 'react'

import { useRef, useState } from "react";
export const CommonSymtoms = () => {
      const [active, setActive] = useState(false);
  const sectionRef = useRef(null);
  const handleToggle = () => {
  if (active) {
   
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  setActive(!active);
};
     const commonSymtoms = [
    {
      id: 1,
      title: "cough&cold",
      img: "./assests/consulting/cough.png",
    },
    {
      id: 2,
      title: "Period Problems",
      img: "./assests/consulting/period problem.png",
    },
    {
      id: 3,
      title: "Stomach Issues",
      img: "./assests/consulting/stomach.png",
    },
    {
      id: 4,
      title: "Skin Problems",
      img: "./assests/consulting/skinProblem.png",
    },
    {
      id: 5,
      title: "Depression or Anixiety",
      img: "./assests/consulting/depression.png",
    },
    {
      id: 6,
      title: "Performance Issues in Bed",
      img: "./assests/consulting/performance.png",
    },
    {
      id: 7,
      title: "Vaginal Infection",
      img: "./assests/consulting/infection.png",
    },
    {
      id: 8,
      title: "Want To Loose Weight",
      img: "./assests/consulting/weightLoose.png",
    },
    {
      id: 9,
      title: "Sick Kid",
      img: "./assests/consulting/sick-kid.png",
    },
    {
      id: 10,
      title: "Breathing Issues",
      img: "./assests/consulting/breathing.png",
    },
  ];

  return (
    <section className="w-full py-20 px-6 text-center">
            <h2 className="text-4xl font-bold text-[#4f6339] mb-6">Struggling With These Issues?</h2>
            <p className="max-w-2xl mx-auto text-lg opacity-90 mb-10">
              Most health problems come from imbalance in your doshas. Ayurveda heals the root cause — not just symptoms.
            </p>
    
            <div ref={sectionRef} className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    
                {(active ? commonSymtoms: commonSymtoms.slice(0, 6)).map((card, i) => (
                  <div 
                      key={i} 
                      className="p-6 rounded-xl shadow-md bg-white border hover:-translate-y-1 transition"
                    >
                      <img src={card.img} alt={card.title} className="w-full object-contain mb-3" />
                      <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  </div>
                ))}
    
              </div>
                
                 <div className="flex justify-center mt-8">
                   <button
                     onClick={handleToggle}
                     className="px-6 py-3 rounded-lg font-semibold transition text-white
                     bg-[#4f6339] hover:bg-[#3d4e2d]"
                   >
                     {active ? "Show Less" : "Show More"}
                   </button>
                 </div>
    
            </div>
    
          </section>
  )
}
