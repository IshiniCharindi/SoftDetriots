import Slider from "react-slick";
import ImgBlog from "../../assets/images/blog1.jpg";
import ServiceCard from "./ServiceCard.tsx";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
          className={`absolute right-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-red-500 p-2 text-white`}
          onClick={onClick}
          style={{ ...style }}
      >
        ►
      </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
          className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-green-500 p-2 text-white`}
          onClick={onClick}
          style={{ ...style }}
      >
        ◄
      </div>
  );
}

const Swipe = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    mobileFirst: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
      <div className="container px-10 py-10 relative">
        <h1 className="mb-8 inline-block border-l-8 border-primary py-2 pl-2 text-center text-3xl font-bold">
          Explore
        </h1>
        <Slider {...settings}>
          {[...Array(9)].map((_, index) => (
              <div key={index}>
                <ServiceCard Img1={ImgBlog} />
              </div>
          ))}
        </Slider>
      </div>
  );
};

export default Swipe;
