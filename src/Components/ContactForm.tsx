import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        message: "",
        acceptedPolicy: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // You can add form submission logic here (e.g., send via email or API)
    };

    return (
        <div className=" bg-black text-white px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Section */}
            <div className="flex flex-col justify-between ">
                <div >
                    <h4 className="text-sm uppercase text-gray-400">Get in Touch</h4>
                    <h1 className="text-2xl md:text-3xl font-bold mt-2">
                        Think better with company and get us with contact!
                    </h1>
                    <p className="mt-4 text-gray-300">
                        We’re happy to answer any questions you may have and help you determine which of our services best fit your needs.
                    </p>
                    <p className="mt-4">Call us at: <span className="font-bold">+ (123)-456-789</span></p>
                    <p className="mt-4">Call us at: <span className="font-bold">+ (123)-456-789</span></p>
                    <p className="mt-4">Call us at: <span className="font-bold">+ (123)-456-789</span></p>
                    <div className="flex gap-3 mt-4">
                        <button className="bg-green-500 p-2 rounded"><i className="fab fa-whatsapp text-white"></i></button>
                        <button className="bg-green-500 p-2 rounded"><i className="fab fa-twitter text-white"></i></button>
                        <button className="bg-green-500 p-2 rounded"><i className="fab fa-linkedin text-white"></i></button>
                        <button className="bg-green-500 p-2 rounded"><i className="fab fa-youtube text-white"></i></button>
                    </div>
                </div>

                <div className="text-sm ">
                    <h3 className="text-white font-semibold mb-2">What Happens next?</h3>
                    <ul className="space-y-2 text-green-400">
                        <li>➡️ We schedule a call at your convenience</li>
                        <li>➡️ We do a discovery and consulting meeting</li>
                        <li>➡️ We prepare a proposal</li>
                    </ul>
                </div>
            </div>

            {/* Right Section - Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-2 bg-transparent border border-white rounded text-white"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 bg-transparent border border-white rounded text-white"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 bg-transparent border border-white rounded text-white"
                />
                <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-2 bg-transparent border border-white rounded text-white"
                >
                    <option value="">Select Country</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="USA">USA</option>
                    <option value="India">India</option>
                </select>
                <textarea
                    name="message"
                    placeholder="Message Here"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-2 bg-transparent border border-white rounded text-white"
                ></textarea>

                <label className="flex items-center text-sm text-gray-300">
                    <input
                        type="checkbox"
                        name="acceptedPolicy"
                        checked={formData.acceptedPolicy}
                        onChange={handleChange}
                        className="mr-2"
                        required
                    />
                    I have read and accepted the privacy policy
                </label>

                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
                >
                    Send Your Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
