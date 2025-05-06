import NavBar from "../Components/Other/NavBar.tsx";
import Footer from "../Components/Other/Footer.tsx";
import ContactForm from "../Components/ContactUs/ContactForm.tsx";
import FAQSection from "../Components/ContactUs/FAQSection.tsx";
import HeadSection from "../Components/Other/HeadSection.tsx";
import ContactHeadSection from '../assets/images/ContactHeadSection.jpg'
import {Helmet} from "react-helmet";

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Soft Detroits - Contact us</title>
                <meta
                    name="description"
                    content="Get in touch with Soft Detroit. We'd love to hear from you—whether it's a project idea, feedback, or partnership opportunity."
                />
                <link rel="canonical" href="https://softdetroits.com/contact"/>

                {/* Open Graph for social sharing */}
                <meta property="og:title" content="Contact Us - Soft Detroit"/>
                <meta
                    property="og:description"
                    content="Reach out to the Soft Detroit team for inquiries, collaborations, or support."
                />
                <meta property="og:url" content="https://softdetroits.com/contact"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="https://softdetroits.com/og-image.png"/>
                {/* Replace with actual OG image URL */}

                {/* Optional Twitter Card */}
                <meta name="twitter:title" content="Contact Us - Soft Detroit"/>
                <meta
                    name="twitter:description"
                    content="We're here to connect! Contact the team at Soft Detroit to start a conversation."
                />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:image" content="https://softdetroits.com/og-image.png"/>
            </Helmet>
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