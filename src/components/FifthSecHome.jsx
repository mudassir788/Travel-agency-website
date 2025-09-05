export default function FifthSecHome() {
  return (
    <div>
      <div className="flex flex-wrap gap-8 justify-center w-full">
        {/*new card*/}
        <div className="shadow-xl p-4 rounded-2xl w-full sm:w-[340px] md:w-[300px] lg:w-[280px] h-[380px] flex flex-col">
          <img
            src="/assets/Rectangle18.png"
            alt="image "
            className="rounded-lg max-h-80 object-cover w-full"
          />
          <p className="font-bold text-lg">Bike and rickshaw rental</p>
          <p>Book your quality vehicle quickly for an hour or all day!</p>
        </div>
        {/*new card*/}
        <div className="shadow-xl p-4 rounded-2xl w-full sm:w-[340px] md:w-[300px] lg:w-[280px] h-[380px]  flex flex-col">
          <img
            src="/assets/Rectangle19.png"
            alt="image "
            className="rounded-lg max-h-80 object-cover w-full"
          />
          <p className="font-bold text-lg">Guided tour of the countryside</p>
          <p>
            Live the real Lucchese experience by visiting the suburbs by bike!
          </p>
        </div>
        {/*new card*/}
        <div className="shadow-xl p-4 rounded-2xl w-full sm:w-[340px] md:w-[300px] lg:w-[280px] h-[380px]  flex flex-col">
          <img
            src="/assets/Rectangle20.png"
            alt="image "
            className="rounded-lg max-h-80 object-cover w-full"
          />
          <p className="font-bold text-lg">Taxi and NCC service</p>
          <p>
            Do you need not only a bike but also a driver? Then you have found
            the right place!
          </p>
        </div>
        {/*new card*/}
        <div className="shadow-xl p-4 rounded-2xl w-full sm:w-[340px] md:w-[300px] lg:w-[280px] h-[380px]  flex flex-col">
          <img
            src="/assets/Rectangle21.png"
            alt="image "
            className="rounded-lg max-h-80 object-cover w-full"
          />
          <p className="font-bold text-lg">Bus Package</p>
          <p>ook your quality vehicle quickly for an hour or all day!</p>
        </div>
      </div>
    </div>
  );
}
