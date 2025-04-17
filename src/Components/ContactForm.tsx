import React, { useState, useEffect } from "react";
import logo from '../assets/images/logo.png';
import { CustomerInterface } from "../Models/Customer";
import {sendMessageInfo} from "../services/sendMessageQuery"
import toast from "react-hot-toast";

const ContactForm = () => {
    const [customer, setCustomer] = useState<CustomerInterface>({
        fullname: "",
        email: "",
        phone: "",
        country:"",
        message: "",

    });

    const [countries, setCountries] = useState<string[]>([]);
    const [loadingCountries, setLoadingCountries] = useState(true);

    useEffect(() => {
        // Fetch countries from REST Countries API
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all");
                const data = await response.json();
                const countryNames = data
                    .map((country: any) => country.name.common)
                    .sort((a: string, b: string) => a.localeCompare(b));
                setCountries(countryNames);
                setLoadingCountries(false);
            } catch (error) {
                console.error("Failed to fetch countries:", error);
                setCountries([
                    "Sri Lanka", "United States", "India", "United Kingdom",
                    "Canada", "Australia", "Germany", "France", "Japan"
                ]);
                setLoadingCountries(false);
            }
        };

        fetchCountries();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;

        if (type === "checkbox") {
            setCustomer(prev => ({ ...prev, [name]: checked }));
        } else {
            setCustomer(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (): Promise<void> => {
        try {
            const response = await sendMessageInfo(customer);
            console.log(response)
            toast.success(response.data.message);

            // Reset form
            setCustomer({
                fullname: "",
                email: "",
                phone: "",
                country:"",
                message: ""
            });

        } catch (e) {
            if (e instanceof Error) {
                toast.error(e.message);
            } else {
                toast.error("An unknown error occurred");
            }
        }
    }

    return (
        <div className="bg-gray-50 text-gray-800 py-16 md:px-12 lg:px-24 ">
            <div className="container mx-auto">
                <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
                    Get In Touch
                </h1>
            </div>

            <div className="max-w-6xl mx-auto px-5 bg-white rounded-xl shadow-lg overflow-hidden mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[600px]">
                    <div className="bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] p-5 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <img
                                src={logo}
                                alt="Company Logo"
                                className="h-64 w-64 object-contain"
                            />
                        </div>

                        <div className="relative z-10">
                            <h4 className="text-xs uppercase tracking-widest opacity-80">Get in Touch</h4>
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 leading-tight">
                                Think better with company and get us with contact!
                            </h1>
                            <p className="mt-6 opacity-90 leading-relaxed">
                                We're happy to answer any questions you may have and help you determine which of our services best fit your needs.
                            </p>
                        </div>

                        <div className="mt-8 space-y-4 relative z-10">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-white bg-opacity-20 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm opacity-80">Phone</p>
                                    <p className="font-semibold lg:text-lg sm:text-sm">+94 76 368 5923</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-white bg-opacity-20 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm opacity-80">Email</p>
                                    <p className="font-semibold lg:text-lg sm:text-sm">softdetroitservices@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-white bg-opacity-20 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm opacity-80">Address</p>
                                    <p className="font-semibold lg:text-lg sm:text-sm">Colombo, Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <div className="p-5 sm:p-10 flex flex-col justify-center">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Send us a message</h2>
                            <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you soon</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="fullname"
                                            name="fullname"
                                            placeholder="John Doe"
                                            value={customer.fullname}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            value={customer.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            placeholder="+1 (123) 456-7890"
                                            value={customer.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={customer.country}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                                            disabled={loadingCountries}
                                        >
                                            <option value="">Select Country</option>
                                            {countries.map((country) => (
                                                <option key={country} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                        {loadingCountries && (
                                            <p className="text-xs text-gray-500 mt-1">Loading countries...</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={customer.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                                        required
                                    ></textarea>
                                </div>

                                {/*<div className="flex items-start">*/}
                                {/*    <div className="flex items-center h-5">*/}
                                {/*        <input*/}
                                {/*            id="acceptedPolicy"*/}
                                {/*            name="acceptedPolicy"*/}
                                {/*            type="checkbox"*/}
                                {/*            checked={customer.acceptedPolicy}*/}
                                {/*            onChange={handleChange}*/}
                                {/*            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"*/}
                                {/*            required*/}
                                {/*        />*/}
                                {/*    </div>*/}
                                {/*    <div className="ml-3 text-sm">*/}
                                {/*        <label htmlFor="acceptedPolicy" className="font-medium text-gray-700">*/}
                                {/*            I agree to the <a href="#" className="text-blue-600 hover:underline">privacy policy</a> and <a href="#" className="text-blue-600 hover:underline">terms of service</a>*/}
                                {/*        </label>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg"
                                >
                                    Send Your Message
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;