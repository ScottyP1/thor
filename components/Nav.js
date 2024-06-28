'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../public/logo2.png';

export default function Nav() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const path = usePathname();

    useEffect(() => {
        const closeSidebarOnOutsideClick = (e) => {
            if (sidebarOpen && !e.target.closest('.sidebar')) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', closeSidebarOnOutsideClick);

        return () => {
            document.removeEventListener('mousedown', closeSidebarOnOutsideClick);
        };
    }, [sidebarOpen]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="sticky top-0 z-50">
            {/* Navbar */}
            <div className="bg-black/[.3] text-white flex items-center justify-between px-4 h-[80px] xl:h-[100px]">
                <div className="ml-6 flex items-center justify-center lg:justify-start w-full">
                    <Link href="/" rel="preload">
                        <div className="cursor-pointer p-2">
                            <Image src={Logo} width={60} alt="logo" className="rounded-full xl:w-[100px]" />
                        </div>
                    </Link>
                    <ul className="hidden lg:flex space-x-4 ml-12 mt-2">
                        <NavItem path={path} href="/" text="Home" closeSidebar={closeSidebar} />
                        <NavItem path={path} href="/about" text="About" closeSidebar={closeSidebar} />
                        <NavItem path={path} href="/services_" text="Services" closeSidebar={closeSidebar} />
                        <NavItem path={path} href="/contact" text="Contact" closeSidebar={closeSidebar} />
                    </ul>
                </div>
                <div className="hidden lg:flex lg:items-center lg:space-x-4">
                    <Link href='/contact'>
                        <button className="rounded-lg bg-red-600 px-2 py-2 w-[100px] hover:bg-red-700">Get Quote</button> {/* For larger screens */}
                    </Link>
                </div>
                <button className="lg:hidden text-white ml-auto" onClick={toggleSidebar}>
                    <div className="space-y-1">
                        <span className="block w-8 h-0.5 bg-white"></span>
                        <span className="block w-8 h-0.5 bg-white"></span>
                        <span className="block w-8 h-0.5 bg-white"></span>
                    </div>
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`sidebar fixed top-0 right-0 h-full w-32 bg-black/[.9] text-white transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform lg:hidden z-50`}
            >
                <div className="flex items-center justify-between px-4 h-22">
                    <button className="text-white" onClick={toggleSidebar}>
                        X
                    </button>
                </div>
                <ul className="flex flex-col items-start p-2 mt-14">
                    <NavItem path={path} href="/" text="Home" closeSidebar={closeSidebar} />
                    <NavItem path={path} href="/about" text="About" closeSidebar={closeSidebar} />
                    <NavItem path={path} href="/services_" text="Services" closeSidebar={closeSidebar} />
                    <NavItem path={path} href="/contact" text="Contact" closeSidebar={closeSidebar} />
                </ul>
            </div>
        </div>
    );
}

function NavItem({ href, text, path, closeSidebar }) {
    return (
        <li className={`relative ${path === href ? 'text-[#B50000]' : 'text-white'} mt-2 text-xl`}>
            <Link href={href}>
                <div className="cursor-pointer w-full" onClick={closeSidebar}>
                    {text}
                </div>
            </Link>
        </li>
    );
}
