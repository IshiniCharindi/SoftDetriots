const BannerDetails = ({ reverse, img }) => {
  return (
      <section className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-8 md:min-h-[500px] md:py-10">
            <div className="grid w-full grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
              {/* Text Content */}
              <div
                  data-aos="fade-right"
                  data-aos-duration="400"
                  data-aos-once="true"
                  className={`flex flex-col items-start gap-4 text-left md:p-4 lg:p-8 ${
                      reverse ? "md:order-last" : ""
                  }`}
              >
                <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                  About Soft Detroits
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  ducimus eius quis ad enim aliquid iusto eum nihil exercitationem
                  necessitatibus?
                </p>
                <div className="w-full">
                  <ul className="flex list-inside list-disc flex-col gap-2 text-sm sm:text-base md:gap-3">
                    <li className="font-medium">
                      Lorem ipsum adipisicing elit. Cum, vel.
                    </li>
                    <li className="font-medium">
                      dlss ipsum adipisicing elit. Cum, vel.
                    </li>
                    <li className="font-medium">adipisicing elit. Cum, vel.</li>
                  </ul>
                </div>
                <div className="mt-2 flex flex-wrap gap-3">
                  <button className="rounded-md border-1 bg-blue-950/10 px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all duration-300 hover:bg-primary/80 hover:shadow-md sm:px-5 sm:py-2.5">
                    Get Started
                  </button>
                  <button className="rounded-md border-1 border-gray-300 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-800 sm:px-5 sm:py-2.5">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Image */}
              <div
                  data-aos="fade-left"
                  data-aos-duration="400"
                  data-aos-once="true"
                  className={`relative h-full w-full ${reverse ? "order-1" : ""}`}
              >
                <img
                    src={img}
                    alt="About Soft Detroits"
                    className="mx-auto h-auto w-full rounded-lg object-cover shadow-sm transition-all duration-300 hover:shadow-md sm:max-h-[400px] sm:min-h-[350px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default BannerDetails;