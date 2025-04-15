import CountUp from "react-countup";

const BaseHomeAbout = () => {
  return (
      <section className="container flex h-12 items-center justify-center md:h-32 lg:ml-28">
        <div className="mx-auto my-4 grid w-full max-w-[800px] -translate-y-10 grid-cols-4 divide-x divide-slate-700 bg-white p-2 shadow-lg md:-translate-y-16 md:p-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-sm font-bold text-black sm:text-lg md:text-3xl">
              <CountUp end={10} suffix="+" duration={2.75} />
            </h1>
            <h1 className="mx-1 text-center text-xs text-black sm:text-md md:text-lg">Skilled Developers</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-sm font-bold text-black sm:text-lg md:text-3xl">
              <CountUp end={100} suffix="%" duration={2.75} />
            </h1>
            <h1 className="mx-1 text-center text-xs text-black sm:text-md md:text-lg">Client Satisfaction</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-sm font-bold text-black sm:text-lg md:text-3xl">
              <CountUp end={15} suffix="+" duration={2.75} />
            </h1>
            <h1 className="mx-1 text-center text-xs text-black sm:text-md md:text-lg">Technologies Used</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-sm font-bold text-black sm:text-lg md:text-3xl">
              <CountUp end={24} suffix="/7" duration={2.75} />
            </h1>
            <h1 className="mx-1 text-center text-xs text-black sm:text-md md:text-lg">Support Available</h1>
          </div>
        </div>
      </section>
  );
};

export default BaseHomeAbout;