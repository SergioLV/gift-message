import React, { useState } from 'react';
import Footer from "../components/Footer";

const Encoder: React.FC = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const [inputValue, setInputValue] = useState('');
    const [giftLink, setGiftLink] = useState(baseUrl);
    const [copyFeedback, setCopyFeedback] = useState(''); // For copy feedback

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setGiftLink(baseUrl + btoa(value)); 
    };

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(giftLink);
            setCopyFeedback('Copied!');
            setTimeout(() => setCopyFeedback(''), 1500); // Remove the feedback after 1.5 seconds
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="bg-pink-200 h-screen flex flex-col">
            <div className="flex-grow flex flex-col items-center justify-center space-y-4">
                <h1 className="text-2xl font-bold text-gray-700">Gift Message</h1>
                <p className="text-sm text-gray-600 mb-4">Write your messages and generate shareable gift links.</p>
                <input
                    type="text"
                    className="p-2 border rounded"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type something..."
                />
                <div className="bg-gray-100 p-2 rounded w-64">
                    <strong>Gift Message Link:</strong>
                    <br />
                    <a href={giftLink} className="hover:text-pink-500 cursor-pointer">{giftLink}</a>
                </div>
                <button 
                    className="mt-2 p-2 bg-pink-500 hover:bg-pink-600 text-white rounded" 
                    onClick={handleCopyClick}
                >
                    {copyFeedback || 'Copy Link'}
                </button>
            </div>
            <Footer/>
        </div>
    )
}

export default Encoder;
