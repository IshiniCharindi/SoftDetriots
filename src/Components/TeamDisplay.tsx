const TeamDisplay = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            bio: 'Visionary leader with 15+ years in industry innovation',
            img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'CTO',
            bio: 'Tech enthusiast building the future one line of code at a time',
            img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60'
        },
        {
            id: 3,
            name: 'Emma Rodriguez',
            role: 'Marketing Director',
            bio: 'Creative storyteller who connects brands with their audiences',
            img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60'
        }
    ];

    return (
        <div data-aos="fade-up" data-aos-offset="200" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 " >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
                        Meet Our Team
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-7 lg:gap-12 sm:grid-cols-2 md:grid-cols-3">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src={member.img}
                                    alt={member.name}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1b388bcc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                <div className="mt-4 h-px w-16 mx-auto bg-[#1b388b] opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="mt-4  group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <p className="text-gray-600">{member.bio}</p>
                                    <div className="mt-4 flex justify-center space-x-4">
                                        <a href="#" className="text-[#1b388b] hover:text-[#142a6b]">
                                            <span className="sr-only">Twitter</span>
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                        <a href="#" className="text-[#1b388b] hover:text-[#142a6b]">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamDisplay;