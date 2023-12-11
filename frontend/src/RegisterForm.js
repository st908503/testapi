// frontend/src/components/RegisterForm.js

import React, { useState } from 'react';


const RegisterForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Destructure the formData object
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            address,
            city,
            state,
            zip,
            phoneNumber,
        } = formData;

        try {
            // Create two separate objects with payloads
            const firstPayload = {
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            };

            const secondPayload = {
                address,
                city,
            };

            const thirdPayload = {
                state,
                zip,
                phoneNumber,
            };

            // Send the firstPayload (first 5 fields)
            const firstResponse = await fetch('http://localhost:8000/registerdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(firstPayload),
            });
            const firstData = await firstResponse.json();
            console.log('First object response:', firstData);

            // Send the secondPayload (remaining fields)
            const secondResponse = await fetch('http://localhost:8000/registerdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(secondPayload),
            });
            const secondData = await secondResponse.json();
            console.log('Second object response:', secondData);

            // Send the thirdPayload (remaining fields)
            const thirdResponse = await fetch('http://localhost:8000/registerdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(thirdPayload),
            });
            const thirdData = await thirdResponse.json();
            console.log('Third object response:', thirdData);
        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <div>
            <h2 className='font-bold text-4xl'>Registration Form</h2>
            <div >
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className='border border-black'
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className='border border-black'
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='border border-black'
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type="text"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className='border border-black'
                        />
                    </label>
                    <label>
                        Confirm Password
                        <input
                            type="text"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className='border border-black'
                        />
                    </label>
                    <label>
                        Address
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className='border border-black'
                        />
                    </label>
                    <label>
                        City
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className='border border-black'
                        />
                    </label>
                    <label>
                        State
                        <input
                            type="file"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className='border border-black'
                        />
                    </label>
                    <label>
                        ZIP
                        <input
                            type="file"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                            className='border border-black'
                        />
                    </label>
                    <label>
                        Phone Number
                        <input
                            type="file"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className='border border-black'
                        />
                    </label>
                    <div>
                        <button className='bg-gray-200 rounded px-4 py-2' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
