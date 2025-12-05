"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SymptomsData from "@/Data/Symptoms";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerApi from "@/api/registrationApi";
import { Link } from "react-router-dom";
import Sidebar from "@/Components/patientRegistration/sideBar";
import RenderStep from "@/Components/patientRegistration/steps";

const inputClassName =
  "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4f6339] focus:border-[#4f6339] outline-none transition";

export default function PatientRegisterForm() {
  

  // ----------------------------
  // FORM STATE
  // ----------------------------
  const [step, setStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([0]);

  const [formData, setFormData] = useState({
    role: "user",
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

  const [reports, setReports] = useState([]);
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const [symptomQuery, setSymptomQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
const [previewFiles, setPreviewFiles] = useState([]);

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
  const files = Array.from(e.target.files);

  // Store files for upload
  setReports((prev) => [...prev, ...files]);

  // Generate preview URLs
  const previewData = files.map((file) => ({
    name: file.name,
    type: file.type,
    url: URL.createObjectURL(file),
  }));

  setPreviewFiles((prev) => [...prev, ...previewData]);
};



  // ----------------------------
  // SYMPTOM AUTO-SUGGEST
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

  

const uploadReports = async () => {
    try {
      const Backend = import.meta.env.VITE_BACKEND;
      setLoadingUpload(true);

      const fileForm = new FormData();
      reports.forEach((file) => fileForm.append("reports", file));

      const res = await axios.post(
        `${Backend}/patient/api/upload/reports`,
        fileForm
      );

      setUploadedUrls(res.data.urls.reports);
      setLoadingUpload(false);
      return res.data.urls.reports;

    } catch (error) {
      setLoadingUpload(false);
      console.error("Upload error:", error);
      alert("Failed to upload reports");
    }
  };


  const submitPatient = async () => {
    try {
      setLoadingSubmit(true);

      const reportUrls = uploadedUrls.length
        ? uploadedUrls
        : await uploadReports();

      const finalPayLoad = {...formData, reports : reportUrls}
      const res = await registerApi(finalPayLoad);

      setLoadingSubmit(false);
      alert("Patient created successfully!");
      console.log(res.data);

    } catch (error) {
      setLoadingSubmit(false);
      console.error("Submit error:", error);
      alert("Failed to create patient");
    }
  };
 
  const stepNames = ["Basic Info", "Health Details", "Symptoms & History"];


  
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
        {/* {renderSidebar()} */}
        {<Sidebar
          step={step}
            stepNames={stepNames}
            completedSteps={completedSteps}
            setStep={setStep}
        />}

        <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {<RenderStep
              s={step}
              formData={formData}
              updateFieldValue={updateFieldValue}
              errors={errors}
              inputClassName={inputClassName}
              symptomQuery={symptomQuery}
              setSymptomQuery={setSymptomQuery}
              suggestions={suggestions}
              handleSymptomSelect={handleSymptomSelect}
              handleFileChange={handleFileChange}
              previewFiles={previewFiles}
              loadingUpload={loadingUpload}
              stepNames={stepNames}
          />}

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
                onClick={submitPatient}
                className="px-6 py-2 bg-[#4f6339] text-white rounded-xl font-semibold hover:bg-[#6d8550] transition disabled:opacity-50"
              >
                {loadingSubmit? "Submitting.." : "Submit Registration"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
