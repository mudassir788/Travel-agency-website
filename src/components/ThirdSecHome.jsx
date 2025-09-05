import React from "react";

export default function ThirdSecHome() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20 w-full max-w-6xl mx-auto px-4 py-12">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-gray-600 text-sm font-[500] mb-2">
            WELCOME TO OUR SITE!
          </span>
          <h1 className="text-2xl font-extrabold mt-2">
            We are the best company for your visit
          </h1>
          <p className="mt-8">
            After decades of experience, and a whole life in Lucca, we offer you
            the most complete tourism service in the city. In addition to having
            bikes and rickshaws to have as much fun as you want, you have the
            choice of tour guides with whom to tour and drivers for your every
            need! We offer packages in the way that you get the most at the
            lowest price. Book with us and we will always be available for you!
          </p>
          <div className="flex flex-wrap gap-6 justify-around mt-8 w-full">
            <p className="text-orange-500 flex flex-col items-center font-bold text-lg">
              <span className="text-sm text-gray-500 mb-1">
                Years Experience
              </span>
              15+
            </p>
            <p className="text-orange-500 flex flex-col items-center font-bold text-lg">
              <span className="text-gray-500 mb-1 text-sm">happy customer</span>
              1000+
            </p>
            <p className="text-orange-500 flex flex-col items-center font-bold text-lg">
              <span className="text-gray-500 mb-1 text-sm">
                choice of service
              </span>
              20+
            </p>
            <p className="text-orange-500 flex flex-col items-center font-bold text-lg">
              <span className="text-gray-500 mb-1 text-sm">
                Professional Guide
              </span>
              10+
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <img
            src="/assets/Group2.png"
            alt="img"
            className="max-w-xs w-full h-auto object-contain mx-auto "
          />
        </div>
      </div>
    </div>
  );
}
