import Slider from "../Components/Slider.tsx";
import Footer from "../Components/Footer.tsx";
import NavBar from "../Components/NavBar.tsx";
import BaseHomeAbout from "../Components/BaseHomeAbout.tsx";
import Banner1 from "../assets/images/blog1.jpg";
import BannerDetails from "../Components/BannerDetails.tsx";
import Swipe from "../Components/Services/Swipe.tsx";
import Service from "../Components/Services/Service.tsx";
import {useEffect} from "react";
import AOS from "aos";

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
            <Service/>
            {/*<Swipe/>*/}

            <BannerDetails reverse={true} img={Banner1} />
            <Footer/>
        </div>
    );
};

export default BaseHome;