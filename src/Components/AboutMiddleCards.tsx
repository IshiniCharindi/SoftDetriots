import React from "react";

interface CardProps {
    name: string;
    timeRange: string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ name, timeRange, imageUrl, description }) => {

    return (
        <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group relative">
            <div className="h-67 overflow-hidden relative">
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
            name: "MERN Stack",
            timeRange: "Fullstack Development",
            description: "MongoDB, Express, React, Node.",
            imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "MEAN Stack",
            timeRange: "Web Applications",
            description: "MongoDB, Express, Angular, Node.",
            imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "LAMP Stack",
            timeRange: "Classic Backend",
            description: "Linux, Apache, MySQL, PHP.",
            imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "JAMstack",
            timeRange: "Static Sites",
            description: "JavaScript, APIs, Markup.",
            imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Django Stack",
            timeRange: "Python Web Apps",
            description: "Python, Django, PostgreSQL.",
            imageUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Ruby on Rails",
            timeRange: "Rapid Prototyping",
            description: "Ruby, Rails, PostgreSQL.",
            imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Serverless Stack",
            timeRange: "Cloud Functions",
            description: "AWS Lambda, APIs, No server.",
            imageUrl: "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Flutter + Firebase",
            timeRange: "Mobile & Web Apps",
            description: "Flutter UI + Firebase backend.",
            imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
    ];



    return (
        <div className="mt-20">
            <h1 style={{fontFamily: 'Raleway, sans-serif'}}
                className="text-center font-thin max-[350px]:text-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-2xl:text-6xl"> Our
                Main Technlogy stacks</h1>
            <div className="flex justify-center items-center">
                <p className="text-center text-gray-400 relative inline-block leading-[3] tracking-[4px]">
                    what we offer
                    <span
                        className="absolute left-1/2 mt-5 transform -translate-x-1/2 bottom-0 w-[55px] h-[2px] bg-[var(--color-primary)]"></span>
                </p>
            </div>
            <div className="!bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
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