import { Globe, Users, TrendingUp, Award } from "lucide-react";

export default function CoreValues() {
    const values = [
        {
            icon: Globe,
            title: "Innovation",
            description: "Continuously pushing boundaries to create cutting-edge solutions.",
            color: "from-blue-500 to-purple-500",
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Working closely with clients to understand their needs and deliver tailored results.",
            color: "from-green-500 to-teal-500",
        },
        {
            icon: TrendingUp,
            title: "Integrity",
            description: "Upholding honesty and transparency in every project and interaction.",
            color: "from-yellow-500 to-orange-500",
        },
        {
            icon: Award,
            title: "Excellence",
            description: "Striving for the highest quality in everything we build.",
            color: "from-red-500 to-pink-500",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold text-center mb-12 text-gray-900">
                Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-2xl shadow-lg text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div
                            className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r ${item.color} text-white`}
                        >
                            <item.icon className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                            {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
