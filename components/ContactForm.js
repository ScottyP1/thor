'use client'

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const [input, setInput] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertInfo, setAlertInfo] = useState({ message: '', type: '', });

    const handleChange = (evt) => {
        setInput({ ...input, [evt.target.name]: evt.target.value });
    };

    const toggleAlert = (message, type) => {
        setAlertInfo({ message, type });
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
            setAlertInfo({ message: '', type: '' });
        }, 5000);
    };

    const handleSubmit = async (evt) => {
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
        setDisabled(true);

        const templateParams = {
            name: input.name,
            email: input.email,
            message: input.message,
        };

        try {
            await emailjs.send(
                'service_wi0sylb',
                'template_y60bcei',
                templateParams,
                'bF5JqzvH_HP0iliq7'
            );

            toggleAlert('Message Sent, We\'ll get back to you soon.', 'success');
        } catch (e) {
            console.error(e);
            toggleAlert('Uh oh. Something went wrong.', 'danger');
        } finally {
            setDisabled(false);
            setInput({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className="flex flex-col items-center">
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
                <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full" disabled={disabled}>
                    Submit
                </button>
            </form>
            {showAlert && (
                <div className={`alert ${alertInfo.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {alertInfo.message}
                </div>
            )}
        </div>
    );
}
