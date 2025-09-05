import React from "react";

export default function SixSecHome() {
  return (
    <div>
      <div className="mt-20 mb-10 w-full min-h-[500px] bg-[url('/assets/group4.png')] bg-cover bg-center flex items-center relative overflow-x-visible">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto p-4 lg:px-8 gap-8 relative z-10">
          <div className="bg-orange-100 w-full max-w-lg h-auto flex flex-col justify-center items-center p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-extrabold mb-2">
              Get special offer by Organization
            </h3>

            {/* Booking Form */}
            <form className="w-full mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-left text-sm font-semibold mb-1">
                    Name and Surname
                  </label>
                  <input
                    type="text"
                    placeholder="Enter surname"
                    className="w-full rounded-lg border bg-white border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
                <div>
                  <label className="block text-left text-sm font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full rounded-lg border bg-white border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
                <div>
                  <label className="block text-left text-sm font-semibold mb-1">
                    Telephone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter telephone"
                    className="w-full rounded-lg border bg-white border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
                <div>
                  <label className="block text-left text-sm font-semibold mb-1">
                    Service Type
                  </label>
                  <select className="w-full rounded-lg border bg-white border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300">
                    <option>Select service </option>
                    <option>Tour</option>
                    <option>Bike Rental</option>
                    <option>Guide</option>
                  </select>
                </div>
                <div>
                  <label className="block text-left text-sm font-semibold mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    className="w-full rounded-lg border bg-white border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
                <div>
                  <label className="block text-left text-sm font-semibold mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    defaultValue="09:00"
                    className="w-full rounded-lg border bg-white border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#FA8B02] w-28 h-10 rounded-full mt-6 text-white font-semibold"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
        <div className="w-full justify-center items-center hidden lg:block lg:w-auto ">
          <img
            src="/assets/bikepicture.png"
            alt=""
            className="lg:h-[500px] md:[200px] w-auto absolute right-[80px] bottom-0"
          />
        </div>
      </div>
    </div>
  );
}
