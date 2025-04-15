import { useState } from 'react';

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index:any) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const faqItems = [
        {
            question: "What services does Soft Detroits offer?",
            answer: "We specialize in custom software development, web and mobile app development, and automation systems that solve real-world problems for businesses of all sizes. <a href='#' title='' className='text-blue-600 transition-all duration-200 hover:underline'>aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            question: "How do you approach client projects?",
            answer: "We believe in a client-first approach. We collaborate closely with our clients to understand their needs, listen to their feedback, and build solutions that are purpose-driven and aligned with their goals. <a href='#' title='' className='text-blue-600 transition-all duration-200 hover:underline'>aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            question: "What industries do you work with?",
            answer: "We work across various industries, including healthcare, finance, retail, education, and more, providing tailored solutions to meet specific industry needs. <a href='#' title='' className='text-blue-600 transition-all duration-200 hover:underline'>aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            question: "How long does it take to complete a project?",
            answer: "The timeline for each project depends on its complexity and scope. We work closely with clients to establish a realistic timeline and ensure timely delivery without compromising quality. <a href='#' title='' className='text-blue-600 transition-all duration-200 hover:underline'>aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            question: "Can SoftDetroits help with post-launch support and maintenance?",
            answer: "Yes! We offer ongoing support and maintenance services to ensure your solutions continue to perform efficiently after launch.<a href='#' title='' className='text-blue-600 transition-all duration-200 hover:underline'>aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            question: "Do you offer free consultations?",
            answer: "Yes, we offer free initial consultations to understand your project requirements and discuss how we can help achieve your business goals.<a href='#' title='' className='text-blue-600 transition-all duration-200 hover:underline'>aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit."
        }
    ];

    return (
        <div>
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="container mx-auto">
                        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
                           Frequently Asked Questions
                        </h1>
                    </div>

                    <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                        {faqItems.map((item, index) => (
                            <div key={index} className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                    onClick={() => toggleAnswer(index)}
                                >
                                    <span className="flex text-lg font-semibold text-black">{item.question}</span>
                                    <svg
                                        className={`w-6 h-6 text-gray-400 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${activeIndex === index ? 'block' : 'hidden'}`}>
                                    <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-600 textbase mt-9">Didn't find the answer you are looking for? <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p>
                </div>
            </section>
        </div>
    );
};

export default FaqSection;