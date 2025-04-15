import React, { useState } from 'react';

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const faqItems = [
        {
            question: "How to create an account?",
            answer: "Amet minim mollit non deserunt ullamco est sit <a href='#' title='' className='text-blue-600 transition-all duration-200 hover:underline'>aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            question: "How can I make payment using Paypal?",
            answer: "Amet minim mollit non deserunt ullamco est sit <a href='#' title='' className='text-blue-600 transition-all duration-200 hover:underline'>aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            question: "Can I cancel my plan?",
            answer: "Amet minim mollit non deserunt ullamco est sit <a href='#' title='' className='text-blue-600 transition-all duration-200 hover:underline'>aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            question: "How can I reach to support?",
            answer: "Amet minim mollit non deserunt ullamco est sit <a href='#' title='' className='text-blue-600 transition-all duration-200 hover:underline'>aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit."
        }
    ];

    return (
        <div>
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <h1 style={{fontFamily: 'Raleway, sans-serif'}}
                        className="text-center font-thin max-[350px]:text-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-2xl:text-6xl">
                        Frequently Asked Questions</h1>
                    <div className="flex justify-center items-center">
                        <p className="text-center text-gray-400 relative inline-block leading-[3] tracking-[4px]">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            <span
                                className="absolute left-1/2 mt-5 transform -translate-x-1/2 bottom-0 w-[55px] h-[2px] bg-[var(--color-primary)]"></span>
                        </p>
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