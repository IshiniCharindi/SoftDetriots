import Slider from "../Components/Slider.tsx";
import ContactForm from "../Components/ContactForm.tsx";
import {FeaturesSection} from "../Components/FeaturesSection.tsx";
import Footer from "../Components/Footer.tsx";

const BaseHome = () => {
    return (
        <div>
            <Slider/>
            <FeaturesSection/>
            <ContactForm/>
            <Footer/>
        </div>
    );
};

export default BaseHome;