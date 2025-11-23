import React from "react";

export const Steps = () => {
  const steps = [
    { n: "1", t: "Tell Us Your Symptoms", d: "Fill a form to help our doctors understand your concerns." },
    { n: "2", t: "Meet Your Doctor", d: "Get a personalized 20–30 min consultation." },
    { n: "3", t: "Get a Treatment Plan", d: "Receive herbs, diet plan, and lifestyle guidance." },
    { n: "4", t: "Follow-Up & Support", d: "Continuous doctor support to monitor your progress." },
  ];

  return (
    <section className="w-full py-20 px-6 bg-[#efe9cb] text-center">
      <h2 className="text-4xl font-bold text-[#4f6339] mb-10">
        How Your Consultation Works
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-12 md:gap-4">

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">

            {/* Connector line — only for desktop */}
            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-full w-20 h-1 bg-[#834d6f] opacity-80"></div>
            )}

            <div className="w-20 h-20 flex items-center justify-center text-3xl font-bold
              bg-[#834d6f] text-[#efe9cb] rounded-full mb-4 shadow-md">
              {step.n}
            </div>

            <h3 className="text-xl font-semibold text-[#4f6339]">
              {step.t}
            </h3>

            <p className="text-sm text-[#4f6339] opacity-80 mt-2 max-w-[220px]">
              {step.d}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};
