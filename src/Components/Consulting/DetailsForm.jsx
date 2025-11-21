export default function ConsultationForm() {
  return (
    <section className="w-full bg-[#efe9cb] py-16 px-5 text-[#4f6339]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Book Your Ayurveda Consultation
      </h2>

      <form className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6 border">

        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-semibold mb-1">First Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#834d6f]"
              />
            </div>
             <div className="flex flex-col">
              <label className="font-semibold mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#834d6f]"
              />
            </div>

        </div>

        {/* Symptoms */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Symptoms</label>
          <textarea
            rows="4"
            placeholder="Describe your symptoms"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#834d6f]"
          ></textarea>
        </div>
        
                {/* Dosha */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-[#4f6339]">
            Dosha (Optional)
          </label>
        
          <select
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
              placeholder="Enter phone number"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#834d6f]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email</label>
            <input
              type="email"
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
