import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import registerApi from "@/api/registrationApi";
import { Eye } from "lucide-react";
import SymptomsData from "@/Data/Symptoms";

export default function RegisterForm() {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    symptoms: [],
    pastMedicalHistory: "",
    reports: [],
  });

  const totalSteps =
    role === "doctor" ? 3 : 3; // Patients now also have 3 steps

  const updateField = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const next = () => step < totalSteps && setStep(step + 1);
  const back = () => step > 0 && setStep(step - 1);

  const goToStep = (i) => {
    if (i <= step) setStep(i);
  };

  const handleFileUpload = (e) => {
    setFormData({
      ...formData,
      reports: [...e.target.files],
    });
  };

  const handleSymptomsChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setFormData({ ...formData, symptoms: selected });
  };

  const submit = async () => {
    setLoading(true);

    try {
      const fd = new FormData();

      for (let key in formData) {
        if (key === "reports") {
          formData.reports.forEach((file) => fd.append("reports", file));
        } else {
          fd.append(key, formData[key]);
        }
      }

      const res = await registerApi(fd);
      toast.success("Registration Successful!");
      console.log("Server Response:", res.data);
    } catch (err) {
      console.log(err);
      toast.error("Registration Failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-w-full min-h-screen flex items-center justify-center bg-[#efe9cb] text-[#4f6339] p-4">
      <ToastContainer />
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6">

        {/* STEP INDICATOR */}
        <div className="w-full flex items-center justify-center gap-4 mb-10">
          {Array.from({ length: totalSteps + 1 }).map((_, i) => (
            <div key={i} className="flex items-center">
              <button
                onClick={() => goToStep(i)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold
                  ${
                    i === step
                      ? "bg-[#4f6339]"
                      : i < step
                      ? "bg-[#6d8550]"
                      : "bg-gray-300"
                  }`}
              >
                {i}
              </button>

              {i < totalSteps && (
                <div
                  className={`w-20 h-[3px] mx-2 rounded-lg ${
                    i < step ? "bg-[#4f6339]" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* STEP 0 — CHOOSE ROLE */}
        {step === 0 && (
          <div className="space-y-6 text-center">
            <h2 className="text-xl font-bold">Registering As?</h2>

            <select
              name="role"
              onChange={(e) => {
                updateField(e);
                setRole(e.target.value);
              }}
              className="w-full p-3 border border-gray-400 rounded-xl"
            >
              <option value="user">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin</option>
            </select>

            <button
              onClick={next}
              className="w-full p-3 bg-[#834d6f] text-white rounded-xl"
            >
              Next
            </button>

            <p className="text-lg">
              Already have an account?{" "}
              <span className="text-[#834d6f]">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        )}

        {/* STEP 1 — BASIC INFO */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Basic Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                placeholder="First Name"
                onChange={updateField}
                className="p-3 border border-gray-400 rounded-xl"
              />

              <input
                name="lastName"
                placeholder="Last Name"
                onChange={updateField}
                className="p-3 border border-gray-400 rounded-xl"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="phoneNo"
                placeholder="Phone Number"
                onChange={updateField}
                className="p-3 border border-gray-400 rounded-xl"
              />

              <input
                name="mail"
                placeholder="Gmail (example@gmail.com)"
                onChange={updateField}
                className="p-3 border border-gray-400 rounded-xl"
              />
            </div>

            <div className="relative">
              <input
                name="password"
                placeholder="Password"
                type={showPass ? "text" : "password"}
                onChange={updateField}
                className="p-3 w-full border border-gray-400 rounded-xl"
              />

              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-3 cursor-pointer text-gray-600"
              >
                <Eye />
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button onClick={back} className="p-3 bg-gray-300 rounded-xl">
                Back
              </button>
              <button
                onClick={next}
                className="p-3 bg-[#834d6f] text-white rounded-xl"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 — BASIC HEALTH */}
        {step === 2 && role !== "doctor" && (
  <div className="space-y-6">
    <h2 className="text-xl font-bold">Health Details</h2>

    {/* Basic Inputs */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input name="age" placeholder="Age" onChange={updateField} className="p-3 border border-gray-400 rounded-xl" />
      <input name="gender" placeholder="Gender" onChange={updateField} className="p-3 border border-gray-400 rounded-xl" />
      <input name="weight" placeholder="Weight (kg)" onChange={updateField} className="p-3 border border-gray-400 rounded-xl" />
      <input name="height" placeholder="Height (cm)" onChange={updateField} className="p-3 border border-gray-400 rounded-xl" />
      <input name="bloodGroup" placeholder="Blood Group" onChange={updateField} className="p-3 border border-gray-400 rounded-xl" />
    </div>

    {/* Symptoms Selection */}
    <div className="space-y-3">
      <p className="font-semibold">Select Your Symptoms</p>

      <div className="max-h-64 overflow-y-scroll border rounded-xl p-3 bg-gray-50">
        {SymptomsData.map((symptom, index) => (
          <label key={index} className="flex items-center gap-2 py-1">
            <input
              type="checkbox"
              value={symptom}
              onChange={(e) => {
                const checked = e.target.checked;
                const value = e.target.value;

                setFormData((prev) => {
                  const arr = prev.symptoms || [];
                  return {
                    ...prev,
                    symptoms: checked
                      ? [...arr, value]
                      : arr.filter((s) => s !== value),
                  };
                });
              }}
            />
            <span>{symptom}</span>
          </label>
        ))}
      </div>
    </div>

    {/* Previous Diagnosis */}
    <textarea
      name="pastMedicalHistory"
      placeholder="Previous Diagnoses / Medical History"
      onChange={(e) =>
        setFormData({
          ...formData,
          pastMedicalHistory: e.target.value.split(","),
        })
      }
      className="w-full p-3 border border-gray-400 rounded-xl"
    ></textarea>

    {/* File Upload: Previous Reports */}
    <div className="space-y-2">
      <p className="font-semibold">Upload Previous Medical Reports</p>
      <input
        type="file"
        multiple
        accept=".jpg,.png,.pdf"
        onChange={(e) => {
          setFormData({
            ...formData,
            medicalFiles: e.target.files,
          });
        }}
        className="w-full p-3 border border-gray-400 rounded-xl bg-white"
      />
    </div>

    {/* Nav Buttons */}
    <div className="grid grid-cols-2 gap-4">
      <button onClick={back} className="p-3 bg-gray-300 rounded-xl">Back</button>

      <button
        onClick={submit}
        className="p-3 bg-[#834d6f] text-white rounded-xl flex items-center justify-center"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
    </div>
  </div>
)}

        {/* STEP 3 — PATIENT ADVANCED HEALTH DATA */}
        {step === 3 && role === "user" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Your Medical Background</h2>

            <textarea
              name="pastMedicalHistory"
              onChange={updateField}
              placeholder="Previous Diagnosis / Medical History"
              className="w-full p-3 border border-gray-400 rounded-xl min-h-[100px]"
            ></textarea>

            <div>
              <label className="font-semibold">Select Symptoms</label>
              <select
                multiple
                onChange={handleSymptomsChange}
                className="w-full p-3 border border-gray-400 rounded-xl h-40"
              >
                {SymptomsData().map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-semibold">Upload Reports</label>
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="w-full p-3 border border-gray-400 rounded-xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button onClick={back} className="p-3 bg-gray-300 rounded-xl">
                Back
              </button>

              <button
                onClick={submit}
                className="p-3 bg-[#834d6f] text-white rounded-xl flex items-center justify-center"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        )}

        {/* DOCTOR STEP 2 */}
        {step === 2 && role === "doctor" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Basic Health Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="age"
                placeholder="Age"
                onChange={updateField}
                className="p-3 border border-gray-400 rounded-xl"
              />
              <input
                name="gender"
                placeholder="Gender"
                onChange={updateField}
                className="p-3 border border-gray-400 rounded-xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button onClick={back} className="p-3 bg-gray-300 rounded-xl">
                Back
              </button>
              <button
                onClick={next}
                className="p-3 bg-[#834d6f] text-white rounded-xl"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* DOCTOR STEP 3 */}
        {step === 3 && role === "doctor" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Doctor Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="specialization"
                placeholder="Specialization"
                onChange={updateField}
                className="p-3 border border-gray-400 rounded-xl"
              />
              <input
                name="experienceYears"
                placeholder="Experience (Years)"
                onChange={updateField}
                className="p-3 border border-gray-400 rounded-xl"
              />
              <input
                name="registrationNumber"
                placeholder="Registration Number"
                onChange={updateField}
                className="p-3 border border-gray-400 rounded-xl"
              />
              <input
                name="clinicAddress"
                placeholder="Clinic Address"
                onChange={updateField}
                className="p-3 border border-gray-400 rounded-xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button onClick={back} className="p-3 bg-gray-300 rounded-xl">
                Back
              </button>

              <button
                onClick={submit}
                className="p-3 bg-[#834d6f] text-white rounded-xl flex items-center justify-center"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
