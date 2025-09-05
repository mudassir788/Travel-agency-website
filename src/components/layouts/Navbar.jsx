import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Eng");
  const languages = ["Eng", "Urdu", "Hindi"];
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white/20 relative z-10 px-4 py-2 w-full">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/assets/logo.png"
          alt="logo"
          className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] ml-2 sm:ml-4 p-2 sm:p-4"
        />
      </div>
      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center justify-center flex-1">
        <ul className="flex flex-row space-x-8 text-white font-semibold font-sans">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Tour package</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </div>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setNavOpen((open) => !open)}
          className="text-white focus:outline-none"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>
      {/* Right Side - only visible on desktop/tablet */}
      <div className="hidden sm:flex space-x-4 text-white items-center justify-center">
        <div className="relative mr-10">
          <button
            className="bg-white/0 text-white px-5 py-2 rounded flex items-center"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            {selectedLang}
            <ChevronDown className="ml-2 size-3" />
          </button>
          {dropdownOpen && (
            <ul className="absolute left-0 mt-2 w-32 bg-white rounded shadow-lg z-20">
              {languages.map((lang) => (
                <li
                  key={lang}
                  className="px-4 py-2 cursor-pointer text-black rounded hover:bg-gray-100"
                  onClick={() => {
                    setSelectedLang(lang);
                    setDropdownOpen(false);
                  }}
                >
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button>login</button>
        <button className="bg-[#FA8B02] w-28 h-10 rounded-full">Sign up</button>
      </div>
      {/* Mobile Nav Dropdown - includes nav links, language, login, signup */}
      {navOpen && (
        <div className="absolute top-full left-0 w-full bg-white rounded-b shadow-lg z-30 flex flex-col text-black font-semibold font-sans md:hidden">
          {["Home", "About Us", "Tour package", "Contact Us"].map((item) => (
            <li
              key={item}
              className="px-6 py-3 border-b last:border-b-0 border-gray-200 hover:bg-gray-100 cursor-pointer"
              onClick={() => setNavOpen(false)}
            >
              {item}
            </li>
          ))}
          <div className="px-6 py-3 border-b border-gray-200 flex flex-col gap-2">
            <div className="relative">
              <button
                className="bg-white/0 text-black px-5 py-2 rounded flex items-center border border-gray-300 w-full justify-between"
                onClick={() => setDropdownOpen((open) => !open)}
              >
                {selectedLang}
                <ChevronDown className="ml-2 size-3" />
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-32 bg-white rounded shadow-lg z-40">
                  {languages.map((lang) => (
                    <li
                      key={lang}
                      className="px-4 py-2 cursor-pointer text-black rounded hover:bg-gray-100"
                      onClick={() => {
                        setSelectedLang(lang);
                        setDropdownOpen(false);
                      }}
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="w-full bg-gray-100 text-black py-2 rounded">
              login
            </button>
            <button className="w-full bg-[#FA8B02] text-white py-2 rounded">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
