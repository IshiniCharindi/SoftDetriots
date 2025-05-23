import ourStory from "../../assets/images/ourStory.jpg"

const OurStory = () => {
    return (
        <div className="mt-5 md:mt-20 max-w-6xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
                <div className="border-2 border-gray-200 p-2.5 rounded-lg">
                    <img
                        src={ourStory}
                        alt="Our Team"
                        className="w-full h-auto rounded-md object-cover"
                    />
                </div>
                <div className="mt-5"></div>
            </div>

            <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h1>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    At SoftDetroits, we empower businesses with smart, scalable software. From a small team of passionate
                    developers, we've grown into a tech powerhouse delivering custom software, web and mobile apps, and automation
                    systems. Our client-first approach ensures we collaborate, listen, and build solutions that matter.
                    <br/>
                    Beyond just delivering products, we care about our clients’ long-term success. That’s why we prioritize quality,
                    performance, and peace of mind because your growth is our goal.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            checked
                            readOnly
                        />
                        <span className="text-gray-700 font-medium">Professional Specialist</span>
                    </div>

                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            checked
                            readOnly
                        />
                        <span className="text-gray-700 font-medium">Precise Builders</span>
                    </div>

                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            checked
                            readOnly
                        />
                        <span className="text-gray-700 font-medium">Brilliant Ideas</span>
                    </div>

                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            checked
                            readOnly
                        />
                        <span className="text-gray-700 font-medium">24/7 Assistance</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStory;