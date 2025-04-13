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
    name: 'Sabari Holdings',
    email: 'info@sabariholdings.com',
    mobile: '+94 77 551 7474',
    social: {
        faceBook: 'https://www.facebook.com/masimpex1?mibextid=ZbWKwL'
    },
    banner: [
        {
            imageLink: banner01,
            heading: 'Global Trade Expertise',
            description: 'A trusted name in the export-import industry, bridging global markets with quality products.'
        },
        {
            imageLink: banner02,
            heading: 'Product Specialization',
            description: 'Ensuring the highest standards in international trade and logistics.'
        },
        {
            imageLink: banner03,
            heading: 'Reliable Services',
            description: 'Empowering businesses with top-tier export-import services worldwide.'
        }
    ],
}
export default company;