import OurStory from "../Components/AboutUs/OurStory.tsx";
import NavBar from "../Components/Other/NavBar.tsx";
import Footer from "../Components/Other/Footer.tsx";
import CoreValues from "../Components/AboutUs/CoreValues.tsx";
import HeadSection from "../Components/Other/HeadSection.tsx";
import backgroundImage from "../assets/images/AboutHeadSection.jpg"
import AboutMiddleCards from "../Components/AboutUs/AboutMiddleCards.tsx";
import { Helmet } from "react-helmet";

const AboutUs = () => {
    return (
        <div>
        <Helmet>
        <title>Soft Detroits - About Us</title>
        <meta
          name="description"
          content="Learn more about Soft Detroit—our mission, values, and the passionate team behind innovative software solutions."
        />
        <link rel="canonical" href="https://softdetroits.com/about" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Soft Detroit - About Us" />
        <meta
          property="og:description"
          content="Learn more about Soft Detroit—our mission, values, and the passionate team behind innovative software solutions."
        />
        <meta property="og:url" content="https://softdetroits.com/about" />
        <meta property="og:type" content="website" />
        
        </Helmet>

            <NavBar/>
            <HeadSection heading={'Driven by Vision, Crafted with Code.'}
                         para={'Meet the minds behind Soft Detroits where creativity meets code to build solutions that matter.'}
                         image={backgroundImage}/>
            <OurStory/>
            <AboutMiddleCards/>
            <CoreValues/>
            <Footer/>
        </div>
    );
};

export default AboutUs;