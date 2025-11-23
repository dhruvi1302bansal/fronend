import React, { useState } from 'react';
import SymptomsData from '@/Data/Symptoms.js'; 
import SubmitPatientDetails from '@/api/SubmitFormData.js';
export default function ConsultationForm() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    symptoms: '',
    dosha: '',
    address: '',
    phone: '',
    email: '',
  });

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

 
  const getLastSymptomQuery = (text) => {
    const parts = text.split(/[\s,]+/).filter(Boolean);
    return parts[parts.length - 1] || '';
  };

  // Handle changes for all standard form inputs (not symptoms)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle changes for the Symptoms text area
  const handleSymptomsChange = (e) => {
    const text = e.target.value;
    setFormData(prevData => ({ ...prevData, symptoms: text }));
    
    const lastQuery = getLastSymptomQuery(text).toLowerCase();

    if (lastQuery.length > 0) {
      // Filter symptoms based on the last typed word
      const filteredSuggestions = SymptomsData
        .filter(symptom => 
          symptom.toLowerCase().includes(lastQuery)
        )
        .slice(0, 5); 
        
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Handle click on a suggested symptom
  const handleSuggestionClick = (symptom) => {
    const currentSymptoms = formData.symptoms.trim();
    const lastQuery = getLastSymptomQuery(currentSymptoms);
    const lastQueryIndex = currentSymptoms.lastIndexOf(lastQuery);
    
    let newSymptoms;
    
    if (lastQueryIndex !== -1 && lastQuery.length > 0) {
      // Replace the last incomplete word with the full suggested symptom
      const baseText = currentSymptoms.substring(0, lastQueryIndex);
      // Ensure there is a separator (comma and space) after the added symptom
      newSymptoms = baseText.trim() + symptom + ', '; 
    } else {
      // If no query or only spaces, just append the new symptom
      newSymptoms = (currentSymptoms ? currentSymptoms + ', ' : '') + symptom + ', ';
    }

    setFormData(prevData => ({ ...prevData, symptoms: newSymptoms }));
    setSuggestions([]);
    setShowSuggestions(false);
  };
  
  // Handle form submission
 const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Attempting to submit form data:', formData);
    
    try {
        await SubmitPatientDetails(formData); 
        alert('Consultation booked successfully!');
       
        setFormData({
            firstName: '',
            lastName: '',
            symptoms: '',
            dosha: '',
            address: '',
            phone: '',
            email: '',
        });
    } catch (error) {
        alert('Submission failed. Please check the console for details.');
        console.log(error)
    }
  };


  return (
    <section className="w-full bg-[#efe9cb] py-16 px-5 text-[#4f6339]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Book Your Ayurveda Consultation
      </h2>

      <form 
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6 border"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#834d6f]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#834d6f]"
            />
          </div>
        </div>

        {/* Symptoms (with Autocomplete) */}
        <div className="flex flex-col relative"> 
          <label className="font-semibold mb-1">Symptoms</label>
          <textarea
            rows="4"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleSymptomsChange}
            placeholder="Describe your symptoms (e.g., Headache, Fatigue)"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#834d6f]"
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Hide suggestions on blur after a short delay
            onFocus={() => {
                // Re-show suggestions if there's a query and they exist
                if (suggestions.length > 0 && getLastSymptomQuery(formData.symptoms).length > 0) {
                    setShowSuggestions(true);
                }
            }}
          ></textarea>
          
          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute z-10 top-full mt-1 w-full bg-white border border-[#4f6339] rounded-lg shadow-xl max-h-48 overflow-y-auto">
              {suggestions.map((symptom, index) => (
                <div
                  key={index}
                  className="p-3 cursor-pointer hover:bg-[#efe9cb] text-[#4f6339] font-medium transition"
                  // Use onMouseDown instead of onClick to prevent the textarea's onBlur from firing first
                  onMouseDown={() => handleSuggestionClick(symptom)}
                >
                  {symptom}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Dosha */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-[#4f6339]">
            Dosha (Optional)
          </label>
          <select
            name="dosha"
            value={formData.dosha}
            onChange={handleChange}
            className="
              p-3 
              rounded-xl 
              bg-white 
              border
              text-[#4f6339] 
              font-medium
              focus:outline-none 
              focus:ring-1
              focus:ring-black 
              focus:border-[#834d6f]
              hover:border-[#4f6339] 
              transition
              cursor-pointer
            "
          >
            <option value="">Select Dosha</option>
            <option value="vata">Vata</option>
            <option value="pitta">Pitta</option>
            <option value="kapha">Kapha</option>
            <option value="tridosha">Tridosha</option>
          </select>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Address</label>
          <textarea
            rows="3"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#834d6f]"
          ></textarea>
        </div>

        {/* Phone + Email (Responsive Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#834d6f]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#834d6f]"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-[#4f6339] text-white font-semibold rounded-lg text-lg hover:bg-[#3d4e2d] transition"
        >
          Book Consultation
        </button>

      </form>
    </section>
  );
}