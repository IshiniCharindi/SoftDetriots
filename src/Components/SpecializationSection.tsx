const SpecializationSection = () => {
    const specializations = [
        {
            title: "Architecture",
            description: "A short description of this quality. Make these lines enticing enough to prove that you are the best in all you do."
        },
        {
            title: "Landscape Design",
            description: "A short description of this quality. Make these lines enticing enough to prove that you are the best in all you do."
        },
        {
            title: "Furniture Design",
            description: "A short description of this quality. Make these lines enticing enough to prove that you are the best in all you do."
        },
        {
            title: "Exterior Design",
            description: "A short description of this quality. Make these lines enticing enough to prove that you are the best in all you do."
        },
        {
            title: "Site Planning",
            description: "A short description of this quality. Make these lines enticing enough to prove that you are the best in all you do."
        },
        {
            title: "Interior Design",
            description: "A short description of this quality. Make these lines enticing enough to prove that you are the best in all you do."
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