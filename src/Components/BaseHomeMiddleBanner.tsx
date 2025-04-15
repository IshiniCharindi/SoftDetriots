import bgBanner from "../assets/images/BaseHomeMiddleBanner.jpg"

const BaseHomeMiddleBanner = (props: any) => {
    return (
        <div
            className={`relative bg-cover bg-center ${props.className} px-6 sm:px-12 rounded-lg shadow-lg`}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${bgBanner})` , backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",}}
        >

            <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Unlock Digital Success with Soft Detroits
                </h2>

                <p className="text-white text-lg mb-8">
                    At Soft Detroits, we don’t just build websites or apps, we craft powerful digital solutions designed
                    for growth. Let’s explore your vision, define your goals, and map out a smart strategy together.
                    <br/><span className="text-gray-200 font-bold text-lg mb-8">Ready to transform your vision into reality?</span>
                </p>

                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                    Let's talk →
                </button>
            </div>
        </div>
    );
};

export default BaseHomeMiddleBanner;