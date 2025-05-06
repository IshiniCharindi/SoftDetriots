import React from "react";
import react from '../../assets/images/react.png'
import node from '../../assets/images/node.png'
import next from '../../assets/images/nextjs.png'
import django from '../../assets/images/django.png'
import dotnet from '../../assets/images/dotnet.png'
import flutter from '../../assets/images/flutter.png'
import reactnative from '../../assets/images/reactnative.png'
import springboot from '../../assets/images/springboot.png'

interface CardProps {
    name: string;
    timeRange: string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ name, timeRange, imageUrl, description }) => {

    return (
        <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group relative">
            <div className="h-55 sm:h-67 overflow-hidden relative">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x200?text=Flower+Image";
                    }}
                />
                {/* Dark overlay that animates from bottom to top */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-1000 ease-in-out
                               transform origin-bottom scale-y-0 group-hover:scale-y-100"></div>
            </div>
            <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2 text-center">{name}</h3>
                <div className="mb-2">{timeRange}</div>
                <div className="mb-2">{description}</div>
            </div>
        </div>
    );
};

const AboutMiddleCards: React.FC = () => {
    const techStacks = [
        {
            name: "React Stack",
            timeRange: "Interactive Web UIs",
            description: "React, JavaScript, REST APIs.",
            imageUrl: react
        },
        {
            name: "Next.js Stack",
            timeRange: "SEO-Friendly Web Apps",
            description: "Next.js, React, Node.js.",
            imageUrl: next
        },
        {
            name: "Flutter Stack",
            timeRange: "Cross-Platform Apps",
            description: "Flutter UI, Dart, Firebase/MySQL backend.",
            imageUrl: flutter
        },
        {
            name: "Node.js + Express Stack",
            timeRange: "Scalable Backends",
            description: "Node.js, Express, REST APIs, MongoDB",
            imageUrl: node
        },

        {
            name: "Django Stack",
            timeRange: "Python Web Apps",
            description: "Python, Django, PostgreSQL.",
            imageUrl: django
        },
        {
            name: "Spring Boot Stack",
            timeRange: "Robust Java Backend",
            description: "Java, Spring Boot, Spring Security,MySQL.",
            imageUrl: springboot
        },
        {
            name: "React Native Stack",
            timeRange: "Mobile App Development",
            description: "React Native, JavaScript, APIs, Firebase",
            imageUrl: reactnative
        },
        {
            name: ".NET Stack",
            timeRange: "Enterprise Applications",
            description: "C#, ASP.NET Core, SQL Server.",
            imageUrl: dotnet
        }
    ];

    return (
        <div className="mt-20">
            <div className="container  mx-auto">
                <h1 className=" border-l-8 py-2 pl-2 text-center text-3xl font-bold">
                    Our Main Technology Stacks
                </h1>
            </div>

            <div className="!bg-white  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-7">
                {techStacks.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        description={item.description}
                        timeRange={item.timeRange}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutMiddleCards;