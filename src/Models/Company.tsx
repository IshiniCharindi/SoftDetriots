import banner01 from "../assets/images/banner01.jpg"
import banner02 from "../assets/images/banner02.jpg"
import banner03 from "../assets/images/banner03.jpg"

interface Company {
    name: string;
    email: string;
    mobile: string;
    social: any
    banner: Array<{
        imageLink: string;
        heading: string;
        description: string;
    }>;
}

// Static data about the company
const company: Company = {
    name: 'Soft Detroits',
    email: 'softdetroitservices@gmail.com',
    mobile: '+94 77 551 7474',
    social: {
        faceBook: 'https://www.facebook.com/masimpex1?mibextid=ZbWKwL'
    },
    banner: [
        {
            imageLink: banner01,
            heading: 'Automate Smarter, Future-Proof',
            description: 'Empower your business with intelligent automation that evolves with tomorrow. \n'
        },
        {
            imageLink: banner02,
            heading: 'Build Bold. Code Smart',
            description: 'From startups to enterprises, we engineer clean, future-ready code that grows with your vision.\n'
        },
        {
            imageLink: banner03,
            heading: 'Driven by Innovation, Powered by Code',
            description: 'We don’t just develop software. We build digital experiences that fuel your success.\n'
        }
    ],
};

export default company;