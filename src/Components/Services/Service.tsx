import Img1 from "../../assets/images/WebDesign.jpg";
import Img2 from "../../assets/images/AppDevelopment.jpg";
import Img3 from "../../assets/images/DesktopDevelopment.jpg";

const Service = () => {
  const services = [
    {
      id: 1,
      image: Img1,
      date: "April 24, 2022",
      author: "By Dilshad",
      title: "Website Development",
      description: "At Soft Detroits, we craft responsive, high-performance websites."
    },
    {
      id: 2,
      image: Img2,
      date: "Jan 3, 2023",
      author: "By Akshay",
      title: "Mobile Application Development",
      description: "At Soft Detroits, we build powerful, user-centric mobile applications."
    },
    {
      id: 3,
      image: Img3,
      date: "April 24, 2024",
      author: "By Satya",
      title: "SEO Optimization",
      description: "At Soft Detroits, we optimize your online presence to rank higher, reach wider, and perform better."
    }
  ];

  return (
      <main data-aos="fade-up" data-aos-offset="200" className="mt-10">
        <section className="container mb-20 mx-auto">
          <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
            Our Services
          </h1>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service) => (
                <div
                    key={service.id}
                    id="card"
                    className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl"
                >
                  <div className="overflow-hidden">
                    <img
                        src={service.image}
                        alt="No image"
                        className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                    />
                  </div>
                  {/*<div className="flex justify-between pt-2 text-slate-600">*/}
                  {/*  <p>{service.date}</p>*/}
                  {/*  <p className="line-clamp-1">{service.author}</p>*/}
                  {/*</div>*/}
                  <div className="space-y-3 py-3">
                    <h1 className="line-clamp-1 text-xl font-bold">
                      {service.title}
                    </h1>
                    <p className="line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </section>
      </main>
  );
};

export default Service;