import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginApi from "@/api/loginApi";

export default function Login() {
  const [formData, setFormData] = useState({
    mail: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const updateField = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async () => {
    if (!formData.mail || !formData.password) {
      toast.error("All fields are mandatory.");
      return;
    }

    try {
      setLoading(true);
      const res = await loginApi(formData);

      toast.success("Login successful. Redirecting...");
      console.log("Login Response:", res.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Login failed.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#efe9cb] p-4">
      {/* Toast Container */}
      <ToastContainer position="top-center" />

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-[#4f6339] mb-6">
          Welcome Back
        </h2>

        {/* Form */}
        <div className="space-y-5">
          {/* EMAIL */}
          <input
            name="mail"
            placeholder="Enter your Gmail"
            onChange={updateField}
            className="w-full p-3 border border-gray-400 rounded-xl placeholder-gray-500"
          />

          {/* PASSWORD */}
          <input
            name="password"
            type="password"
            placeholder="Enter your Password"
            onChange={updateField}
            className="w-full p-3 border border-gray-400 rounded-xl placeholder-gray-500"
          />

          <div className="text-right">
            <button className="text-[#834d6f] font-medium text-sm hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            onClick={submit}
            disabled={loading}
            className="w-full bg-[#834d6f] text-white p-3 rounded-xl flex items-center justify-center"
          >
            {loading ? (
              <div className="border-2 border-white border-t-transparent w-5 h-5 rounded-full animate-spin"></div>
            ) : (
              "Login"
            )}
          </button>
        </div>

        {/* Signup Redirect */}
        <p className="text-center mt-6 text-gray-700">
          Don’t have an account?{" "}
          <span className="text-[#834d6f] font-medium cursor-pointer"><Link to="/patient-registration">Signup</Link>   </span>
        </p>
      </div>
    </div>
  );
}
