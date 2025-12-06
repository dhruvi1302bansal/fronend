"use client";

import React, { useState, useEffect } from "react";
import { Check, ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { Range } from "react-range";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerApi from "@/api/registrationApi";

const inputClassName = "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4f6339] focus:border-[#4f6339] outline-none transition";

// ------------------------------
// DOCTOR REGISTER FORM
// ------------------------------
export default function DoctorRegisterForm() {
 // const router = useRouter();

 // ----------------------------
 // FORM STATE
 // ----------------------------
 const [step, setStep] = useState(0);
 const [completedSteps, setCompletedSteps] = useState([0]);

 const [formData, setFormData] = useState({
  role: "doctor",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  age: 35, // Default age for doctor
  gender: "",
  specialization: "",
  experienceYears: "",
  registrationNumber: "",
  clinicAddress: "",
  // licenseCopies: [], // For file uploads like license/degree
 });

 const [errors, setErrors] = useState({});

 // ----------------------------
 // HANDLE FIELD UPDATES
 // ----------------------------
 const updateFieldValue = (field, value) => {
  setFormData((prev) => ({
   ...prev,
   [field]: value,
  }));
 };
 
//  const handleFileChange = (e) => {
//   setFormData((prev) => ({
//    ...prev,
//    licenseCopies: [...e.target.files], // Take all selected files
//   }));
//  };


 // ----------------------------
 // VALIDATION ENGINE
 // ----------------------------
 const validateStep = (s) => {
  let e = {};

  if (s === 0) {
   if (!formData.firstName.trim()) e.firstName = "First Name is required.";
   if (!formData.lastName.trim()) e.lastName = "Last Name is required.";
   if (!/^[0-9]{10}$/.test(formData.phone)) e.phone = "Enter a valid 10-digit phone number.";
   if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Enter a valid email address.";
   if (formData.password.length < 6) e.password = "Password must be at least 6 characters.";
  }

  if (s === 1) {
   if (!formData.age || formData.age < 18) e.age = "Age is required (min 18).";
   if (!formData.gender) e.gender = "Gender is required.";
  }

  if (s === 2) {
   if (!formData.specialization.trim()) e.specialization = "Specialization is required.";
   if (!formData.experienceYears || isNaN(formData.experienceYears) || parseInt(formData.experienceYears) < 0) e.experienceYears = "Valid experience years are required.";
   if (!formData.registrationNumber.trim()) e.registrationNumber = "Registration Number is required.";
   if (!formData.clinicAddress.trim()) e.clinicAddress = "Clinic Address is required.";
  //  if (formData.licenseCopies.length === 0) e.licenseCopies = "License/Degree copies are required for verification.";
  }

  setErrors(e);
  return Object.keys(e).length === 0;
 };

 // ----------------------------
 // STEP ACTIONS
 // ----------------------------
 const next = () => {
  if (!validateStep(step)) {
   toast.error("Please fill in all required fields correctly to proceed.");
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
   toast.error("Please fill in all required fields correctly before submitting.");
   return;
  }
  
  // Prepare FormData for submission
  const submitData = new FormData();
  for (const key in formData) {
  //  if (key === 'licenseCopies') {
  //   formData.licenseCopies.forEach((file) => submitData.append('licenseCopies', file));
  //  } else {
  // }
  submitData.append(key, formData[key]);
  }
  const logData = {};
 submitData.forEach((value, key) => {
  logData[key] = value;
 });
 console.log("Submitting Doctor Data:", logData);

  try {
   await registerApi(submitData); 
   toast.success("Doctor Registration Successful! Awaiting verification.");
   // setTimeout(() => router.push("/login"), 1000); 
  } catch (error) {
   toast.error("Registration failed. Please try again.");
  }
 };

 // ----------------------------
 // SIDEBAR STEPS
 // ----------------------------
 const stepNames = ["Basic Info", "Basic Health", "Professional Details"];

 const renderSidebar = () => (
  <div className="hidden md:flex flex-col w-64 bg-white rounded-2xl shadow-xl p-6 gap-3 min-h-[400px]">
   <h3 className="text-xl font-bold text-[#4f6339] mb-4">Doctor Registration</h3>
   {stepNames.map((label, i) => {
    const active = step === i;
    const done = i < step;

    return (
     <button
      key={i}
      // Allow navigation to previous steps freely, but lock forward progress until step is completed
      disabled={i > step && !completedSteps.includes(i)}
      onClick={() => setStep(i)}
      className={`flex items-center gap-3 p-3 rounded-xl transition duration-200 text-left
       ${
        active
         ? "bg-[#4f6339] text-white shadow-md"
         : done
         ? "bg-[#6d8550] text-white hover:bg-[#4f6339]/80"
         : "bg-gray-100 text-gray-600 hover:bg-gray-200"
       }
      `}
     >
      <div
       className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0
        ${
         active
          ? "bg-white text-[#4f6339]"
          : done
          ? "bg-white text-[#6d8550]"
          : "bg-gray-300 text-gray-600"
        }
       `}
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
    <h2 className="text-2xl font-bold text-[#4f6339] border-b pb-2">{currentStepTitle}</h2>
    {s === 0 && (
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* FIRST NAME */}
      <div>
       <label className="font-semibold">
        First Name <span className="text-red-500">*</span>
       </label>
       <input
        value={formData.firstName}
        onChange={(e) => updateFieldValue("firstName", e.target.value)}
        className={inputClassName}
       />
       {errors.firstName && (
        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
       )}
      </div>

      {/* LAST NAME */}
      <div>
       <label className="font-semibold">
        Last Name <span className="text-red-500">*</span>
       </label>
       <input
        value={formData.lastName}
        onChange={(e) => updateFieldValue("lastName", e.target.value)}
        className={inputClassName}
       />
       {errors.lastName && (
        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
       )}
      </div>

      {/* PHONE */}
      <div>
       <label className="font-semibold">
        Phone Number <span className="text-red-500">*</span>
       </label>
       <input
        type="tel"
        value={formData.phone}
        onChange={(e) => updateFieldValue("phone", e.target.value)}
        className={inputClassName}
       />
       {errors.phone && (
        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
       )}
      </div>

      {/* EMAIL */}
      <div>
       <label className="font-semibold">
        Email <span className="text-red-500">*</span>
       </label>
       <input
        type="email"
        value={formData.email}
        onChange={(e) => updateFieldValue("email", e.target.value)}
        className={inputClassName}
       />
       {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
        onChange={(e) => updateFieldValue("password", e.target.value)}
        className={inputClassName}
       />
       {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
       )}
      </div>
     </div>
    )}

    {s === 1 && (
     <div className="space-y-6">
      {/* AGE */}
      <div>
       <label className="font-semibold block">
        Age: {formData.age} <span className="text-red-500">*</span>
       </label>
       <Range
       className = "max-w-[50%]"
        step={1}
        min={25} // Setting a minimum professional age
        max={75}
        values={[formData.age]}
        onChange={(values) => updateFieldValue("age", values[0])}
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
        <p className="text-red-500 text-sm mt-1">{errors.age}</p>
       )}
      </div>

      {/* GENDER */}
      <div>
       <label className="font-semibold">
        Gender <span className="text-red-500">*</span>
       </label>
       <select
        value={formData.gender}
        onChange={(e) => updateFieldValue("gender", e.target.value)}
        className={inputClassName}
       >
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
       </select>
       {errors.gender && (
        <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
       )}
      </div>
     </div>
    )}

    {s === 2 && (
     <div className="space-y-6">
      
      {/* SPECIALIZATION */}
      <div>
       <label className="font-semibold">
        Specialization <span className="text-red-500">*</span>
       </label>
       <input
        value={formData.specialization}
        onChange={(e) => updateFieldValue("specialization", e.target.value)}
        placeholder="e.g., Cardiology, Dermatology"
        className={inputClassName}
       />
       {errors.specialization && (
        <p className="text-red-500 text-sm mt-1">{errors.specialization}</p>
       )}
      </div>

      {/* EXPERIENCE YEARS */}
      <div>
       <label className="font-semibold">
        Experience (Years) <span className="text-red-500">*</span>
       </label>
       <input
        type="number"
        value={formData.experienceYears}
        onChange={(e) => updateFieldValue("experienceYears", e.target.value)}
        placeholder="e.g., 5"
        className={inputClassName}
       />
       {errors.experienceYears && (
        <p className="text-red-500 text-sm mt-1">{errors.experienceYears}</p>
       )}
      </div>

      {/* REGISTRATION NUMBER */}
      <div>
       <label className="font-semibold">
        Medical Registration Number <span className="text-red-500">*</span>
       </label>
       <input
        value={formData.registrationNumber}
        onChange={(e) => updateFieldValue("registrationNumber", e.target.value)}
        className={inputClassName}
       />
       {errors.registrationNumber && (
        <p className="text-red-500 text-sm mt-1">{errors.registrationNumber}</p>
       )}
      </div>

      {/* CLINIC ADDRESS */}
      <div>
       <label className="font-semibold">
        Clinic/Primary Address <span className="text-red-500">*</span>
       </label>
       <textarea
        value={formData.clinicAddress}
        onChange={(e) => updateFieldValue("clinicAddress", e.target.value)}
        placeholder="Full Address"
        className={`${inputClassName} h-24`}
       />
       {errors.clinicAddress && (
        <p className="text-red-500 text-sm mt-1">{errors.clinicAddress}</p>
       )}
      </div>
      
      {/* FILE UPLOAD: LICENSE/DEGREE COPIES */}
      {/* <div>
       <label className="font-semibold block mb-2">
        Upload License/Degree Copies <span className="text-red-500">*</span>
       </label>
       <label className={`${inputClassName} flex items-center gap-3 cursor-pointer bg-gray-50 text-gray-600 hover:bg-gray-100`}>
        <Upload size={20} className="text-[#4f6339]"/>
        {formData.licenseCopies.length > 0 
         ? `${formData.licenseCopies.length} file(s) selected` 
         : 'Choose files (PDF, JPG, PNG) - Required'}
        <input
         type="file"
         multiple
         accept=".pdf,.jpg,.jpeg,.png"
         onChange={handleFileChange}
         className="hidden"
        />
       </label>
       {errors.licenseCopies && (
        <p className="text-red-500 text-sm mt-1">{errors.licenseCopies}</p>
       )}
      </div> */}

     </div>
    )}
    {s > stepNames.length - 1 && (
     <div className="text-center py-20">
      <Check size={48} className="text-[#4f6339] mx-auto mb-4" />
      <h3 className="text-xl font-bold">Ready for Submission!</h3>
      <p className="text-gray-600">Click 'Submit Registration' below for verification.</p>
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
   <ToastContainer position="bottom-right" autoClose={3000} />
   
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