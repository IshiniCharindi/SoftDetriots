import Slider from "../Components/Slider.tsx";
import Footer from "../Components/Footer.tsx";
import NavBar from "../Components/NavBar.tsx";
import BaseHomeAbout from "../Components/BaseHomeAbout.tsx";
import Banner1 from "../assets/images/blog1.jpg";
import BannerDetails from "../Components/BannerDetails.tsx";
import Service from "../Components/Services/Service.tsx";
import BaseHomeMiddleBanner from "../Components/BaseHomeMiddleBanner.tsx";
import SpecializationSection from "../Components/SpecializationSection.tsx";

const BaseHome = () => {
    return (
        <div>
            <NavBar/>
            <Slider/>
            <BaseHomeAbout/>
            <BannerDetails reverse={true} img={Banner1} />
            <Service/>
            <BaseHomeMiddleBanner className={"py-36"}/>
            <SpecializationSection/>
            <Footer/>
        </div>
    );
};

export default BaseHome;