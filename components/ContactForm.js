'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [disabled, setDisabled] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertInfo, setAlertInfo] = useState({ message: '', type: '' });

    const onSubmit = async (data, e) => {
        setDisabled(true);

        try {
            // Send form data with EmailJS using sendForm
            const response = await emailjs.sendForm(
                'service_wi0sylb', // EmailJS service ID
                'template_y60bcei', // EmailJS template ID
                e.target, // Form element
                'bF5JqzvH_HP0iliq7' // User ID from EmailJS Dashboard
            );

            console.log('EmailJS Response:', response);

            toggleAlert('Message Sent. We\'ll get back to you soon.', 'success');
            reset();

        } catch (error) {
            console.error('Error sending email:', error);
            toggleAlert('Uh oh. Something went wrong.', 'danger');
        } finally {
            setDisabled(false);
        }
    };

    const toggleAlert = (message, type) => {
        setAlertInfo({ message, type });
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
            setAlertInfo({ message: '', type: '' });
        }, 5000);
    };

    return (
        <div className="flex flex-col items-center">
            <form id="contactForm" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="w-full">
                <div>
                    <label className="block text-xl mb-1">Name</label>
                    <input
                        {...register('name', { required: true })}
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full rounded-lg p-2 border border-white bg-transparent mb-1"
                    />
                    {errors.name && <span className="text-red-500">Name is required</span>}
                </div>
                <div>
                    <label className="block text-xl mb-1">Email</label>
                    <input
                        {...register('email', { required: true })}
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full rounded-lg p-2 border border-white bg-transparent mb-1"
                    />
                    {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
                <div>
                    <label className="block text-xl mb-1">Message</label>
                    <textarea
                        {...register('message', { required: true })}
                        placeholder="Message"
                        className="input input-bordered w-full rounded-lg p-2 border border-white bg-transparent"
                        rows="4"
                    />
                    {errors.message && <span className="text-red-500">Message is required</span>}
                </div>
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
