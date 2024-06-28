'use client'

import { useState } from "react";

export default function ContactForm() {
    const [input, setInput] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (evt) => {
        setInput({ ...input, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (!input.name || !input.email || !input.message) {
            setError('All fields are required');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(input.email)) {
            setError('Invalid email address');
            return;
        }

        setError('');
        setSubmitted(true);
        console.log(input);
    };

    return (
        <div className="flex flex-col items-center">
            {submitted ? (
                <div className="text-green-500">Message Sent!</div>
            ) : (
                <form onSubmit={handleSubmit} method="POST" className="w-full">
                    <div>
                        <label className="block text-xl mb-1">Name</label>
                        <input
                            value={input.name}
                            name="name"
                            onChange={handleChange}
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full rounded-lg p-2 border border-white bg-transparent mb-1"
                        />
                    </div>
                    <div className="">
                        <label className="block text-xl mb-1">Email</label>
                        <input
                            value={input.email}
                            name="email"
                            onChange={handleChange}
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full rounded-lg p-2 border border-white bg-transparent mb-1"
                        />
                    </div>
                    <div className="">
                        <label className="block text-xl mb-1">Message</label>
                        <textarea
                            value={input.message}
                            name="message"
                            onChange={handleChange}
                            placeholder="Message"
                            className="input input-bordered w-full rounded-lg p-2 border border-white bg-transparent"
                            rows="4"
                        />
                    </div>
                    {error && <div className="text-red-500 mb-2">{error}</div>}
                    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full">
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
}
