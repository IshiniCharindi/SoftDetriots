import img from "../assets/images/logowithbg.jpg";
import {Link} from "react-router-dom";

interface BannerDetailsProps {
  reverse: boolean;
}

const BannerDetails = ({ reverse}: BannerDetailsProps) => {
  return (
      <section className="bg-slate-100">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-8 md:min-h-[500px] md:py-10">
            <div className="grid w-full grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
              <div
                  data-aos="fade-right"
                  data-aos-duration="400"
                  data-aos-once="true"
                  className={`flex flex-col items-start gap-4 text-left md:p-4 lg:p-8 ${
                      reverse ? "md:order-last" : ""
                  }`}
              >
                <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl max-md:mx-auto">
                  About Soft Detroits
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                  Soft Detroits is a cutting-edge software solutions company committed to delivering innovative, reliable, and user-friendly digital
                  experiences. <br/> <span className="text-md text-slate-800 sm:text-base">Why choose Soft Detroits?</span>
                </p>
                <div className="w-full">
                  <ul className="flex list-inside list-disc flex-col gap-2 text-sm sm:text-base md:gap-3">
                    <li className="font-medium">
                      Future-ready technology
                    </li>
                    <li className="font-medium">
                      Customer-centric approach
                    </li>
                    <li className="font-medium">Innovative digital strategies</li>
                  </ul>
                </div>
                <div className="mt-2 flex flex-wrap gap-3">
                  <button className="rounded-md border-1 hover:bg-blue-950/10 px-4 py-2 text-sm font-medium hover:text-[var(--color-primary)] transition-all duration-300 bg-blue-800 text-white hover:shadow-md sm:px-5 sm:py-2.5">
                    <Link to="/contact">Get Started</Link>
                  </button>
                  <button className="rounded-md border-1 border-gray-300 hover:bg-gray-50 hover:text-black px-4 py-2 text-sm font-medium transition-all duration-300 bg-gray-800 text-white  sm:px-5 sm:py-2.5">
                    <Link to="/about">Learn More</Link>
                  </button>
                </div>
              </div>

              <div
                  data-aos="fade-left"
                  data-aos-duration="400"
                  data-aos-once="true"
                  className={`relative h-full w-full ${reverse ? "order-1" : ""}`}
              >
                <img
                    src={img}
                    alt="About Soft Detroits"
                    className="mx-auto h-auto w-90 rounded-lg object-cover shadow-sm transition-all duration-300 hover:shadow-md sm:max-h-[400px] sm:min-h-[350px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default BannerDetails;