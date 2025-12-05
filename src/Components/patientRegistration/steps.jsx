import { Link } from "react-router-dom";
import { Range } from "react-range";
import { Upload } from "lucide-react";
export default function RenderStep  ({
   s,
  formData,
  updateFieldValue,
  errors,
  inputClassName,
  symptomQuery,
  setSymptomQuery,
  suggestions,
  handleSymptomSelect,
  handleFileChange,
  previewFiles,
  loadingUpload,
  stepNames
})  {
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
              <div className="mt-4">
                {previewFiles.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {previewFiles.map((file, index) => (
                      <div key={index} className="border p-3 rounded-xl bg-white shadow-sm">
                        <p className="text-sm font-medium truncate mb-2">{file.name}</p>
                    
                        {file.type.includes("image") ? (
                          <img
                            src={file.url}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center h-32 bg-gray-100 rounded-lg">
                            <p className="text-gray-600 text-sm">PDF File</p>
                            <a
                              href={file.url}
                              target="_blank"
                              className="text-blue-600 underline text-xs mt-2"
                            >
                              View PDF
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
               {loadingUpload && (
                  <p className="text-blue-600">Uploading reports...</p>
                )}

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
