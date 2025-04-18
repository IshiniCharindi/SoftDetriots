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