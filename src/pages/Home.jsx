import { useState } from "react";
import { User, Calendar, Clock, Car, Plane } from "lucide-react";
import Navbar from "../components/layouts/Navbar";

function Home() {
  const [people, setPeople] = useState("");
  // Set default values for date and time (US format)
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  const [time, setTime] = useState("12:00");
  const [tour, setTour] = useState("");
  const [transport, setTransport] = useState("");

  // Add missing search handler
  const handleSearch = () => {
    // You can add your search logic here
    alert("website data is not dynamic now ");
  };

  return (
    <div className="relative w-full min-h-screen bg-[url('/assets/home-bg.png')] bg-cover bg-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20 px-2 w-full">
        <div className="text-center text-white max-w-xl w-full mx-auto">
          <h3
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg"
            style={{
              fontFamily: "Comic Sans MS, Comic Sans, cursive, sans-serif",
              letterSpacing: "2px",
            }}
          >
            Enjoy in the best way!
          </h3>
          <p className="text-base sm:text-lg md:text-xl font-[400] p-1">
            Enjoy our services for user trip anywhere
          </p>
        </div>
        <div className="w-full max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-4 md:space-y-0 md:m-20 m-4 mt-10 p-4">
            {/* Number of People */}
            <div className="flex flex-col items-start md:items-center w-full md:w-40">
              <div className="flex items-center space-x-2 mb-1">
                <User className="w-5 h-5 text-gray-500" />
                <span className="text-black font-bold mb-1 text-start">
                  person
                </span>
              </div>
              <select
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="p-2 outline-none border-none focus:ring-0 w-full"
              >
                <option value="1">1 Person</option>
                <option value="2">2 Person</option>
                <option value="3">3 Person</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col items-start w-full md:w-40 md:ml-2">
              <div className="flex items-start space-x-2 mb-1">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-black font-bold mb-1">Date</span>
              </div>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-2 outline-none border-none w-auto"
              />
            </div>

            {/* Time */}
            <div className="flex flex-col items-start w-full md:w-40 md:ml-2">
              <div className="flex items-center space-x-2 mb-1">
                <Clock className="w-5 h-5 text-gray-500" />
                <span className="text-black font-bold mb-1">Time</span>
              </div>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="p-2 outline-none border-none focus:ring-0 w-full"
              />
            </div>

            {/* Tour */}
            <div className="flex flex-col items-start w-full md:w-40 md:ml-2">
              <div className="flex items-center space-x-2 mb-1">
                <Plane className="w-5 h-5 text-gray-500" />
                <span className="text-black font-bold mb-1">Tour</span>
              </div>
              <select
                value={tour}
                onChange={(e) => setTour(e.target.value)}
                className="p-2 border-none w-full outline-none focus:ring-0"
              >
                <option>Select Tour</option>
                <option value="dubai">Dubai</option>
                <option value="paris">Paris</option>
              </select>
            </div>

            {/* Transportation */}
            <div className="flex flex-col items-start w-full md:w-40 md:ml-2">
              <div className="flex items-center space-x-2 mb-1">
                <Car className="w-5 h-5 text-gray-500" />
                <span className="text-black font-bold mb-1">
                  Transportation
                </span>
              </div>
              <select
                value={transport}
                onChange={(e) => setTransport(e.target.value)}
                className="p-2 outline-none border-none focus:ring-0 w-full"
              >
                <option> Transportation</option>
                <option value="bus">Bus</option>
                <option value="car">Car</option>
                <option value="plane">Plane</option>
              </select>
            </div>

            {/* Search Button */}
            <div>
              <img
                src="/assets/search.png"
                alt="search "
                onClick={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
