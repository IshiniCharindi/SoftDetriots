import OurStory from "../Components/OurStory.tsx";
import NavBar from "../Components/NavBar.tsx";
import Footer from "../Components/Footer.tsx";
import CoreValues from "../Components/CoreValues.tsx";
import HeadSection from "../Components/HeadSection.tsx";
import backgroundImage from "../assets/images/AboutHeadSection.jpg"
import AboutMiddleCards from "../Components/AboutMiddleCards.tsx";

const AboutUs = () => {
    return (
        <div>
            <NavBar/>
            <HeadSection heading={'About Us'}
                         para={'Global Trade, Seamless Solutions – Connecting Markets, Creating Opportunities!'}
                         image={backgroundImage}/>
            <OurStory/>
            <AboutMiddleCards/>
            <CoreValues/>
            <Footer/>
        </div>
    );
};

export default AboutUs;