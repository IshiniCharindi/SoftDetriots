import { useState, useEffect } from 'react';
import '../../Styles/Footer.css';
import logo from '../../assets/images/logo.png';
import {Link} from "react-router-dom";

type FooterLink = string | { text: string; icon: string };

const Footer = () => {
    const [expandedSections, setExpandedSections] = useState<number[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSection = (index: number) => {
        if (!isMobile || index === 0) return; // Skip toggle for first section
        setExpandedSections(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const sections = [
        {
            title: "",
            description: "SoftDetroits is a client-focused tech company delivering smart, scalable software solutions that drive long-term business success." ,
            logo: logo,
            links: [] as FooterLink[]
        },
        {
            title: "Quick Links",
            links: ["Home", "About Us", "Contact Us"] as FooterLink[],
            routes: ["/", "/about","/contact"]
        },
        {
            title: "Contact Details",
            links: [
                { text: "+94 76 368 5923", icon: "M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" },
                { text: "softdetroitservices@gmail.com", icon: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" },
                { text: "Colombo, Sri Lanka", icon: "M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" }
            ] as FooterLink[]
        },
    ];

    const socialIcons = [
        { icon: "facebook", path: "M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z",link:"https://www.facebook.com/share/15eoXVjrpm/" },
        { icon: "email", path: "M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h15a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 19.5v-15zM4.5 6.384v12.366h15V6.384l-7.5 4.806L4.5 6.384zm15-1.884H4.5l7.5 4.8 7.5-4.8z",link: "seftdetroitservices@gmail.com"},
        { icon: "whatsapp", path: "M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.240-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232",link:"+94763685923" }
    ];

    return (
        <div className="py-6 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)]">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                {/* Grid sections with responsive layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:ml-16">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className={`rounded-lg p-4 transition-all duration-300 ${
                                index !== 0 && isMobile ? 'cursor-pointer bg-gray-700/30' : ''
                            } ${
                                expandedSections.includes(index) ? 'md:shadow-lg shadow-[#D2042D]/50' : ''
                            }`}
                            onClick={() => toggleSection(index)}
                        >
                            {index === 0 && (
                                <div className="flex flex-col items-center  text-center md:text-left md:items-start">
                                    <img
                                        src={section.logo}
                                        alt="Company Logo"
                                        className="h-16 md:h-20 mb-3 mx-auto md:mx-0 lg:ml-28"
                                    />
                                    <p className="text-sm text-gray-300">{section.description}</p>
                                </div>
                            )}

                            {index !== 0 && (
                                <>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-medium text-white md:underline mb-3">
                                            {section.title}
                                        </h3>
                                        {isMobile && (
                                            <svg
                                                className={`w-4 h-4 text-white transform transition-transform duration-300 ${
                                                    expandedSections.includes(index) ? 'rotate-180' : ''
                                                }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </div>

                                    <div
                                        className={`${
                                            isMobile
                                                ? expandedSections.includes(index)
                                                    ? 'max-h-96 mt-3'
                                                    : 'max-h-0'
                                                : 'max-h-96'
                                        } overflow-hidden transition-all duration-300`}
                                    >
                                        <ul className="space-y-2">
                                            {section.links.map((link, i) => (
                                                <li key={i} className="flex items-start">
                                                    {index === 2 ? (
                                                        <>
                                                            <svg
                                                                className="w-4 h-4 mt-0.5 mr-2 text-white flex-shrink-0"
                                                                viewBox="0 0 16 16"
                                                                fill="currentColor"
                                                            >
                                                                <path d={typeof link === 'string' ? '' : link.icon} />
                                                            </svg>
                                                            <span className="text-white text-sm">
                                                                {typeof link === 'string' ? link : link.text}
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <Link
                                                            to={section.routes?.[i] || "#"}
                                                            className="block py-1 text-white text-sm hover:text-[#D2042D] transition-colors duration-200"
                                                        >
                                                            {link.toString()}
                                                        </Link>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <hr className="mt-8 mb-6 border-gray-700" />

                <div className="flex flex-col items-center justify-between px-2 space-y-4 sm:space-y-0 sm:flex-row">
                    <p className="text-white text-sm text-center sm:text-left">
                        &copy; {new Date().getFullYear()} Developed by <span
                        className="font-bold tracking-wide">SoftDetroits</span>
                    </p>
                    <ul className="flex items-center space-x-3">
                        {socialIcons.map((social, index) => {
                            let href = social.link;

                            if (social.icon === "email") {
                                href = `mailto:${social.link}`;
                            } else if (social.icon === "whatsapp") {
                                const phone = social.link.replace(/\D/g, "");
                                href = `https://wa.me/${phone}`;
                            }

                            return (
                                <li key={index}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-[#D2042D] hover:bg-[#D2042D]/30 hover:border-[#D2042D] focus:border-[#D2042D]"
                                    >
                                        {index !== 2 ? (
                                            <svg className="w-3 h-3" viewBox="0 0 20 24" fill="currentColor">
                                                <path d={social.path}/>
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="10"
                                                fill="currentColor"
                                                className="bi bi-whatsapp"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d={social.path}/>
                                            </svg>
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Footer;