import { Check } from "lucide-react";

export default function Sidebar({
  step,
  stepNames,
  completedSteps,
  setStep,
}) {
  return (
    <div className="hidden md:flex flex-col w-64 bg-white rounded-2xl shadow-xl p-6 gap-3 min-h-[400px]">
      <h3 className="text-xl font-bold text-[#4f6339] mb-4">
        Registration Steps
      </h3>

      {stepNames.map((label, i) => {
        const active = step === i;
        const done = i < step;

        return (
          <button
            key={i}
            disabled={i > step && !completedSteps.includes(i)}
            onClick={() => setStep(i)}
            className={`flex items-center gap-3 p-3 rounded-xl transition duration-200 text-left
            ${
              active
                ? "bg-[#4f6339] text-white shadow-md"
                : done
                ? "bg-[#6d8550] text-white hover:bg-[#4f6339]/80"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0
              ${
                active
                  ? "bg-white text-[#4f6339]"
                  : done
                  ? "bg-white text-[#6d8550]"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {done ? <Check size={14} /> : i + 1}
            </div>

            <span className="font-semibold text-sm">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
