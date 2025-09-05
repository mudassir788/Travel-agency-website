import { Calendar } from "lucide-react";

export default function Card() {
  return (
    <div className="px-4 py-10">
      <div>
        <p className="text-2xl font-bold mb-8 text-center">
          Explore our popular destinations
        </p>
        {/* card */}
      </div>
      <div className="flex flex-wrap gap-8 justify-center w-full">
        <div className="shadow-xl p-4 rounded-2xl w-full sm:w-[340px] md:w-[300px] lg:w-[280px] h-[480px] flex flex-col">
          <img
            src="/assets/cardImg.png"
            alt="image "
            className="rounded-lg max-h-80 object-cover w-full"
          />
          <p className="font-bold text-lg">Lucca bike tour</p>
          <p>
            From{" "}
            <span className=" ml-4 text-lg font-bold text-amber-600 ">
              {" "}
              34$
            </span>
          </p>
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-5 h-5 text-orange-500" />
            <span className="text-orange-500">every day</span>
          </div>
          <p className="text-start pr-8">
            A tour of the city and its surroundings led by a professional guide
            ...
          </p>
        </div>
        {/* card */}
        <div className="shadow-xl p-4 rounded-2xl w-full sm:w-[340px] md:w-[300px] lg:w-[280px] h-[480px] flex flex-col">
          <img
            src="/assets/cardImg2.png"
            alt="image "
            className="rounded-lg max-h-80 object-cover w-full"
          />
          <p className="font-bold text-lg">Wine tasting In Tuscany</p>
          <p>
            From{" "}
            <span className=" ml-4 text-lg font-bold text-amber-600 ">34$</span>
          </p>
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-5 h-5 text-orange-500" />
            <span>Monday</span>
          </div>
          <p>
            The real magic is here where you can enjoy the best Tuscan wine and
            eat ...
          </p>
        </div>
        {/* card */}
        <div className="shadow-xl p-4 rounded-2xl w-full sm:w-[340px] md:w-[300px] lg:w-[280px] h-[480px] flex flex-col">
          <img
            src="/assets/cardImg3.png"
            alt="image "
            className="rounded-lg max-h-80 object-cover w-full"
          />
          <p className="font-bold text-lg">Wine tasting In Tuscany</p>
          <p>
            From{" "}
            <span className=" ml-4 text-lg font-bold text-amber-600 ">34$</span>
          </p>
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-5 h-5 text-orange-500" />
            <span>not decided</span>
          </div>
          <p>
            Visiting the 5 Terre is a must, and you can never go there enough
            ...
          </p>
        </div>
        {/* card */}
        <div className="shadow-xl p-4 rounded-2xl w-full sm:w-[340px] md:w-[300px] lg:w-[280px] h-[480px] flex flex-col">
          <img
            src="/assets/cardImg4.png"
            alt="image "
            className="rounded-lg max-h-80 object-cover w-full"
          />
          <p className="font-bold text-lg">Pisa & Lucca</p>
          <p>
            From{" "}
            <span className=" ml-4 text-lg font-bold text-amber-600 ">34$</span>
          </p>
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-5 h-5 text-orange-500" />
            <span>Friday</span>
          </div>
          <p>
            Visit the beautiful Siena and the cities that surround it to
            experience ...
          </p>
        </div>
      </div>
    </div>
  );
}
