const SpecializationSection = () => {
    const specializations = [
        {
            title: "Website Development",
            description: "We craft visually stunning, lightning-fast, and fully responsive websites that not only look great but also perform flawlessly. From concept to launch, we build digital experiences that captivate and convert.\n" +
                "\n"
        },
        {
            title: "Mobile App Development",
            description: "Whether iOS or Android, we develop sleek, user-friendly mobile apps that deliver seamless performance and powerful functionality, all tailored to your business goals."
        },
        {
            title: "UI/UX Design",
            description: "We design intuitive interfaces and engaging user experiences that keep users coming back. Our design approach blends creativity with usability, making your digital presence unforgettable."
        },
        {
            title: "Logo Design",
            description: "Your brand deserves a logo that speaks volumes. We create timeless, memorable logos that reflect your identity, captivate your audience, and elevate your brand image."
        },
        {
            title: "ERP Solutions",
            description: "Streamline operations and boost efficiency with our custom ERP systems. Designed to fit your unique workflow, our solutions simplify complexity and drive productivity across your organization.\n" +
                "\n"
        },
        {
            title: "Full Stack Development",
            description: "From frontend finesse to backend brilliance, we offer complete full stack solutions. Our expertise ensures robust, scalable, and high-performing applications, all built with cutting-edge technologies."
        }
    ];

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className=" mx-auto text-center">
                <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
                    Our Specialization
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-1 sm:mx-20 my-10">
                    {specializations.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h2>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpecializationSection;