import NavBar from "../Components/NavBar.tsx";
import Footer from "../Components/Footer.tsx";
import ContactForm from "../Components/ContactForm.tsx";
import FAQSection from "../Components/FAQSection.tsx";

const ContactUs = () => {
    return (
        <div>
            <NavBar/>
            <ContactForm/>
            <FAQSection/>
            <Footer/>
        </div>
    );
};

export default ContactUs;