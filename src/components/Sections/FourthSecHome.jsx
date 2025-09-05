import React from "react";

export default function FourthSecHome() {
  return (
    <div className="mt-20 mb-10 w-full min-h-[350px] bg-[url('/assets/group4.png')] bg-cover bg-center flex items-center relative overflow-x-visible">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-8 relative z-10">
        <div className="bg-orange-100 w-90 h-64 flex flex-col justify-center items-center p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-extrabold mb-2">
            Get special offer by Organization
          </h3>
          <p className="mb-4 text-sm text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="bg-[#FA8B02] w-28 h-10 rounded-full ">
            Contact Us
          </button>
        </div>
      </div>
      <img
        src="/assets/4thSecHome.png"
        alt=""
        className=" lg:h-[500px] md:[200px] w-auto absolute right-[80px] bottom-0"
      />
    </div>
  );
}
