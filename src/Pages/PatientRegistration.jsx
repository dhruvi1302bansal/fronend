"use client";

import React, { useState, useEffect } from "react";
import { Check, ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { Range } from "react-range";
import SymptomsData from "@/Data/Symptoms";
// import { useRouter } from "next/navigation"; // Keep commented as requested
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerApi from "@/api/registrationApi";
import { Link } from "react-router-dom";

// Basic Input Style for cleaner JSX (Tailwind CSS convention)
const inputClassName =
  "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4f6339] focus:border-[#4f6339] outline-none transition";

// ------------------------------
// PATIENT REGISTER FORM
// ------------------------------
export default function PatientRegisterForm() {
  // const router = useRouter();

  // ----------------------------
  // FORM STATE
  // ----------------------------
  const [step, setStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([0]);

  const [formData, setFormData] = useState({
    role: "patient",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    age: 25,
    weight: 60,
    height: "",
    gender: "",
    symptoms: "",
    healthIssues: "",
    reports: [],
  });

  const [errors, setErrors] = useState({});
  const [symptomQuery, setSymptomQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // ----------------------------
  // HANDLE FIELD UPDATES
  // ----------------------------
  const updateFieldValue = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      reports: [...e.target.files],
    }));
  };

  // ----------------------------
  // SYMPTOM AUTO-SUGGEST ENGINE
  // ----------------------------
  useEffect(() => {
    if (!symptomQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const q = symptomQuery.toLowerCase();
    const filtered = SymptomsData.filter((sym) =>
      sym.toLowerCase().includes(q)
    ).slice(0, 6);

    setSuggestions(filtered);
  }, [symptomQuery]);

  const handleSymptomSelect = (sym) => {
    let current = formData.symptoms;
    if (!current.includes(sym)) {
      current = current ? current + ", " + sym : sym;
      setFormData({ ...formData, symptoms: current });
    }
    setSymptomQuery("");
    setSuggestions([]);
  };

  // ----------------------------
  // VALIDATION ENGINE
  // ----------------------------
  const validateStep = (s) => {
    let e = {};

    if (s === 0) {
      if (!formData.firstName.trim()) e.firstName = "First Name is required.";
      if (!formData.lastName.trim()) e.lastName = "Last Name is required.";
      if (!/^[0-9]{10}$/.test(formData.phone))
        e.phone = "Enter a valid 10-digit phone number.";
      if (!/\S+@\S+\.\S+/.test(formData.email))
        e.email = "Enter a valid email address.";
      if (formData.password.length < 6)
        e.password = "Password must be at least 6 characters.";
    }

    if (s === 1) {
      if (!formData.age || formData.age < 1) e.age = "Age is required.";
      if (!formData.weight || formData.weight < 10)
        e.weight = "Weight is required.";
      if (!formData.height || formData.height < 50)
        e.height = "Height is required.";
      if (!formData.gender) e.gender = "Gender is required.";
    }

    if (s === 2) {
      if (!formData.healthIssues.trim())
        e.healthIssues = "Past health issues/history is required.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ----------------------------
  // STEP ACTIONS
  // ----------------------------
  const next = () => {
    if (!validateStep(step)) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    const newStep = step + 1;
    setCompletedSteps((prev) =>
      prev.includes(newStep) ? prev : [...prev, newStep]
    );
    setStep(newStep);
  };

  const prev = () => setStep(step - 1);

  // ----------------------------
  // SUBMIT FINAL
  // ----------------------------
  const onSubmit = async () => {
    if (!validateStep(step)) {
      toast.error(
        "Please fill in all required fields correctly before submitting."
      );
      return;
    }

    const submitData = new FormData();

    for (const key in formData) {
      if (key === "reports") {
        formData.reports.forEach((file) =>
          submitData.append("reports", file)
        );
      } else {
        submitData.append(key, formData[key]);
      }
    }

    try {
      await registerApi(submitData);
      toast.success("Account Created Successfully!");
      // setTimeout(() => router.push("/dashboard"), 1000);
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  // ----------------------------
  // SIDEBAR STEPS
  // ----------------------------
  const stepNames = ["Basic Info", "Health Details", "Symptoms & History"];

  const renderSidebar = () => (
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

  // ----------------------------
  // RENDER STEP UI
  // ----------------------------
  const renderStep = (s) => {
    const currentStepTitle = stepNames[s];

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#4f6339] border-b pb-2">
          {currentStepTitle}
        </h2>

        {/* -------------------------------- STEP 0 -------------------------------- */}
        {s === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* FIRST NAME */}
            <div>
              <label className="font-semibold">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.firstName}
                onChange={(e) =>
                  updateFieldValue("firstName", e.target.value)
                }
                className={inputClassName}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* LAST NAME */}
            <div>
              <label className="font-semibold">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.lastName}
                onChange={(e) =>
                  updateFieldValue("lastName", e.target.value)
                }
                className={inputClassName}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName}
                </p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="font-semibold">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.phone}
                onChange={(e) =>
                  updateFieldValue("phone", e.target.value)
                }
                className={inputClassName}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                value={formData.email}
                onChange={(e) =>
                  updateFieldValue("email", e.target.value)
                }
                className={inputClassName}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="font-semibold">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  updateFieldValue("password", e.target.value)
                }
                className={inputClassName}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password}
                </p>
              )}
            </div>
          </div>
        )}
        <p className="text-[#4f6339] text-lg">Have a account? <span className="text-[#834d6f]"><Link to="/login">Login</Link> </span></p>

        {/* -------------------------------- STEP 1 -------------------------------- */}
        {s === 1 && (
          <div className="space-y-6">
            {/* AGE */}
            <div>
              <label className="font-semibold block">
                Age: {formData.age}{" "}
                <span className="text-red-500">*</span>
              </label>

              <Range
                step={1}
                min={1}
                max={100}
                values={[formData.age]}
                onChange={(values) =>
                  updateFieldValue("age", values[0])
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="w-[50%] h-2 bg-gray-300 rounded-full cursor-pointer"
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="w-5 h-5 bg-[#4f6339] rounded-full focus:outline-none focus:ring-2 focus:ring-[#4f6339]"
                  />
                )}
              />

              {errors.age && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.age}
                </p>
              )}
            </div>

            {/* WEIGHT */}
            <div>
              <label className="font-semibold block">
                Weight: {formData.weight} kg{" "}
                <span className="text-red-500">*</span>
              </label>

              <Range
                step={1}
                min={10}
                max={200}
                values={[formData.weight]}
                onChange={(values) =>
                  updateFieldValue("weight", values[0])
                }
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="w-[50%] h-2 bg-gray-300 rounded-full cursor-pointer"
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="w-5 h-5 bg-[#4f6339] rounded-full focus:outline-none focus:ring-2 focus:ring-[#4f6339]"
                  />
                )}
              />

              {errors.weight && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.weight}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* HEIGHT */}
              <div>
                <label className="font-semibold">
                  Height (cm){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  placeholder="e.g. 175"
                  value={formData.height}
                  onChange={(e) =>
                    updateFieldValue("height", e.target.value)
                  }
                  className={inputClassName}
                />
                {errors.height && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.height}
                  </p>
                )}
              </div>

              {/* GENDER */}
              <div>
                <label className="font-semibold">
                  Gender{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) =>
                    updateFieldValue("gender", e.target.value)
                  }
                  className={inputClassName}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                {errors.gender && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.gender}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------- STEP 2 -------------------------------- */}
        {s === 2 && (
          <div className="space-y-6">
            {/* SYMPTOMS */}
            <div>
              <label className="font-semibold">
                Current Symptoms (Comma Separated)
              </label>

              <textarea
                value={formData.symptoms}
                onChange={(e) =>
                  updateFieldValue("symptoms", e.target.value)
                }
                placeholder="e.g., Fever, Fatigue, Shortness of Breath"
                className={`${inputClassName} h-28`}
              />

              {/* Auto-suggest input */}
              <div className="relative">
                <input
                  placeholder="Search and add symptoms..."
                  value={symptomQuery}
                  onChange={(e) =>
                    setSymptomQuery(e.target.value)
                  }
                  className={`${inputClassName} mt-2`}
                />

                {suggestions.length > 0 && (
                  <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-xl mt-1 shadow-lg max-h-40 overflow-y-auto">
                    {suggestions.map((sym, idx) => (
                      <button
                        key={idx}
                        onClick={() =>
                          handleSymptomSelect(sym)
                        }
                        className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {sym}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {errors.symptoms && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.symptoms}
                </p>
              )}
            </div>

            {/* HEALTH ISSUES */}
            <div>
              <label className="font-semibold">
                Past Health Issues/Diagnosis{" "}
                <span className="text-red-500">*</span>
              </label>

              <textarea
                value={formData.healthIssues}
                onChange={(e) =>
                  updateFieldValue("healthIssues", e.target.value)
                }
                placeholder="e.g., Diabetes, Hypertension, recent surgery..."
                className={`${inputClassName} h-24`}
              />

              {errors.healthIssues && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.healthIssues}
                </p>
              )}
            </div>

            {/* FILE UPLOAD: REPORTS */}
            <div>
              <label className="font-semibold block mb-2">
                Upload Medical Reports (Optional)
              </label>

              <label
                className={`${inputClassName} flex items-center gap-3 cursor-pointer bg-gray-50 text-gray-600 hover:bg-gray-100`}
              >
                <Upload
                  size={20}
                  className="text-[#4f6339]"
                />
                {formData.reports.length > 0
                  ? `${formData.reports.length} file(s) selected`
                  : "Choose files (PDF, JPG, PNG)"}
                <input
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        )}

        {s > stepNames.length - 1 && (
          <div className="text-center py-20">
            <Check
              size={48}
              className="text-[#4f6339] mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">
              Ready to Submit!
            </h3>
            <p className="text-gray-600">
              Click 'Submit Registration' below to complete your
              sign-up.
            </p>
          </div>
        )}
      </div>
    );
  };

  // ----------------------------
  // MAIN UI
  // ----------------------------
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
      />

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8">
        {renderSidebar()}

        <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {renderStep(step)}

          {/* NAVIGATION BUTTONS */}
          <div className="flex justify-between mt-8">
            {step > 0 ? (
              <button
                onClick={prev}
                className="px-5 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-xl flex items-center gap-2 font-semibold transition"
              >
                <ChevronLeft size={18} />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < stepNames.length - 1 ? (
              <button
                onClick={next}
                className="px-6 py-2 bg-[#4f6339] text-white rounded-xl flex items-center gap-2 font-semibold hover:bg-[#6d8550] transition disabled:opacity-50"
              >
                Next
                <ChevronRight size={18} />
              </button>
            ) : (
              <button
                onClick={onSubmit}
                className="px-6 py-2 bg-[#4f6339] text-white rounded-xl font-semibold hover:bg-[#6d8550] transition disabled:opacity-50"
              >
                Submit Registration
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
