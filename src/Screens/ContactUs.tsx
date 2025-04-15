import NavBar from "../Components/NavBar.tsx";
import Footer from "../Components/Footer.tsx";
import ContactForm from "../Components/ContactForm.tsx";
import FAQSection from "../Components/FAQSection.tsx";
import HeadSection from "../Components/HeadSection.tsx";
import ContactHeadSection from '../assets/images/ContactHeadSection.jpg'

const ContactUs = () => {
    return (
        <div>
            <NavBar/>
            <HeadSection heading={'Contact Us'}
                         para={'Global Trade, Seamless Solutions – Connecting Markets, Creating Opportunities!'}
                         image={ContactHeadSection}/>
            <ContactForm/>
            <FAQSection/>
            <Footer/>
        </div>
    );
};

export default ContactUs;