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
            <HeadSection heading={'Let’s Build Something Great Together.'}
                         para={'Have an idea or project in mind? Reach out — we’re just a message away from making it real.'}
                         image={ContactHeadSection}/>
            <ContactForm/>
            <FAQSection/>
            <Footer/>
        </div>
    );
};

export default ContactUs;