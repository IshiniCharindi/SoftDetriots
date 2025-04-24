import Slider from "../Components/Slider.tsx";
import Footer from "../Components/Footer.tsx";
import NavBar from "../Components/NavBar.tsx";
import BaseHomeAbout from "../Components/BaseHomeAbout.tsx";
import BannerDetails from "../Components/BannerDetails.tsx";
import Service from "../Components/Services/Service.tsx";
import {useEffect} from "react";
import AOS from "aos";
import BaseHomeMiddleBanner from "../Components/BaseHomeMiddleBanner.tsx";
import SpecializationSection from "../Components/SpecializationSection.tsx";
import { Helmet } from "react-helmet";

const BaseHome = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);
    return (
        <div>
            <Helmet>
        <title>Soft Detroit - Innovative Software Solutions</title>
        <meta
          name="description"
          content="Soft Detroit is a technology startup focused on delivering modern, scalable, and innovative software solutions for businesses and individuals."
        />
        <link rel="canonical" href="https://softdetroits.com" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Soft Detroit - Innovative Software Solutions" />
        <meta
          property="og:description"
          content="Explore cutting-edge software products and services by Soft Detroit. We turn ideas into impactful digital solutions."
        />
        <meta property="og:url" content="https://softdetroits.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://softdetroits.com/og-image.png" /> {/* Replace with your actual OG image */}

        {/* Twitter Card */}
        <meta name="twitter:title" content="Soft Detroit - Innovative Software Solutions" />
        <meta
          name="twitter:description"
          content="Discover how Soft Detroit is changing the digital landscape through technology and creativity."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://softdetroits.com/og-image.png" />
      </Helmet>

            <NavBar/>
            <Slider/>
            <BaseHomeAbout/>
            <BannerDetails reverse={true}/>
            <Service/>
            <BaseHomeMiddleBanner className={"py-10 sm:py-36"}/>
            <SpecializationSection/>
            <Footer/>
        </div>
    );
};

export default BaseHome;