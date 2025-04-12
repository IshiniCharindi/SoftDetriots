import Slider from "../Components/Slider.tsx";
import ContactForm from "../Components/ContactForm.tsx";
import {FeaturesSection} from "../Components/FeaturesSection.tsx";
import Footer from "../Components/Footer.tsx";
import NavBar from "../Components/NavBar.tsx";
import Service from "../Components/Service.tsx";
import Banner1 from "../assets/images/blog1.jpg";
import BannerDetails from "../Components/BannerDetails.tsx";

const BaseHome = () => {
    return (
        <div>
            <NavBar/>
            <Slider/>
            <Service/>
            <BannerDetails reverse={true} img={Banner1} />
            <FeaturesSection/>
            <ContactForm/>
            <Footer/>
        </div>
    );
};

export default BaseHome;