import React from 'react'

export const Steps = () => {
  return (
    <section className="w-full py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-[#4f6339] mb-10">How Your Consultation Works</h2>

        <div className="w-full flex flex-col items-center">
          <div className="flex items-center justify-center w-full gap-6 md:gap-12">

             {[
               { n: "1", t: "Tell Us Your Symptoms", d: "Fill a form to help our doctors understand your concerns." },
               { n: "2", t: "Meet Your Doctor", d: "Get a personalized 20–30 min consultation." },
               { n: "3", t: "Get a Treatment Plan", d: "Receive herbs, diet plan, and lifestyle guidance." },
               { n: "4", t: "Follow-Up & Support", d: "Continuous doctor support to monitor your progress." },
             ].map((step, index, arr) => (
               <div key={index} className="flex flex-col items-center text-center relative ">
                  {index !== arr.length - 1 && (
                   <div className="hidden md:block absolute opacity-90 top-10 left-[70%] right-[10%] w-40 h-1 bg-[#834d6f]"></div>
                  )}
                   
                   <div className="w-20 h-20 flex items-center justify-center text-3xl font-bold bg-[#834d6f] text-[#efe9cb] rounded-full shadow-md mb-4 z-10">
                       {step.n}
                   </div>
                   
                   <h3 className="text-xl font-semibold text-[#4f6339]">{step.t}</h3>
                     <p className="text-sm text-[#4f6339] opacity-80 mt-2 max-w-[200px]">
                       {step.d}
                    </p>
                </div>
                   ))}
          </div>
        </div>

      </section>
  )
}
