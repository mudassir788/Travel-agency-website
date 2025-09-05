import React from "react";
import {
  Twitter,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function () {
  return (
    <div className="bg-gray-800 w-full py-6 px-4">
      <div className="min-w-full max-w-5xl flex flex-col justify-around md:flex-row items-center md:items-start gap-10">
        <div className="mb-8 md:mb-0 -ml-4  flex  justify-around md:justify-start md:w-auto">
          <img
            src="/assets/logo.png"
            alt=""
            className="h-28 w-28 mx-auto md:mx-0 "
          />
        </div>
        <div className="flex flex-col md:flex-row flex-wrap w-full md:w-auto justify-between gap-8 text-center md:text-left">
          <ul className="text-white text-sm space-y-2">
            <li className="font-bold mb-2">Services</li>
            <li>Bike and Rickshaw rental</li>
            <li>Guided Tours of Lucca</li>
            <li>Guided Bike Tour of Lucca</li>
            <li>Trip In The Tuscan Hills</li>
            <li>Transportation With Luxury Cars</li>
          </ul>

          <div>
            <ul className="text-white text-sm space-y-2">
              <li className="font-bold mb-2">Home</li>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Tour Packages</li>
            </ul>
          </div>

          <ul className="text-white text-sm space-y-2">
            <li className="font-bold mb-2">Help</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>

          <ul className="text-white text-sm space-y-2 w-full flex justify-center items-center flex-col">
            <li className="font-bold mb-2">Contacts</li>
            <li className="flex items-center  gap-2">
              <MapPin className="w-4 h-4 text-orange-500" />
              Piazza Napoleone, Lucca, Tuscany
            </li>
            <li className="flex items-center  gap-2">
              <Phone className="w-4 h-4 text-orange-500" />
              +39 346 368 5708
            </li>
            <li className="flex items-center  gap-2">
              <Mail className="w-4 h-4 text-orange-500" />
              italiainlimo@gmail.com
            </li>
          </ul>

          <ul className="text-white text-sm space-y-2 w-full flex justify-center items-center flex-col">
            <li className="font-bold mb-2">Social Media</li>
            <li className="flex gap-4">
              <span className="bg-orange-500 rounded-full p-2">
                <Twitter className="w-5 h-5 text-white" />
              </span>
              <span className="bg-orange-500 rounded-full p-2">
                <Facebook className="w-5 h-5 text-white" />
              </span>
              <span className="bg-orange-500 rounded-full p-2 ">
                <Instagram className="w-5 h-5 text-white" />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs mt-8 border-t border-gray-700 pt-4">
        Copyright © 2022. All rights reserved.
      </div>
    </div>
  );
}
