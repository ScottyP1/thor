import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 text-white w-full text-center py-4 bg-black bg-opacity-30 flex justify-center items-center">
            <div className="flex items-center h-[5px]">
                <FaRegCopyright />
                <h1 className="text-sm ml-2">THOR TRANSPORT LLC</h1>
            </div>
        </footer>
    );
}

export default Footer;
