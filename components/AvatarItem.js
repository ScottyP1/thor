'use client';

import { Typography } from "@material-tailwind/react";
import profileImg from '@/public/profileImg.jpg';
import Image from "next/image";

export default function AvatarItem() {
    return (
        <div className="flex items-center bg-black/[.8] me-0 md:me-3 rounded-lg p-2 mb-3 md:flex-row md:items-center space-x-4 shadow">
            <div className="w-24 h-24 overflow-hidden rounded-lg relative">
                <Image
                    src={profileImg}
                    alt="avatar"
                    width={96}
                    height={96}
                    className="object-cover absolute top-0 left-0 w-full h-full"
                />
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full">
                <div className="flex flex-col items-center md:items-start mb-2 md:mb-0">
                    <Typography className="tracking-[5px] text-sm text-white mb-1">Shawn Scott</Typography>
                    <Typography className="tracking-[3px] text-xs text-white">CEO - Founder</Typography>
                </div>
                <div className="flex flex-col items-center md:items-end">
                    <Typography className="tracking-[5px] text-sm text-white mb-1">MC# 1374944</Typography>
                    <Typography className="tracking-[5px] text-sm text-white">DOT# 3810434</Typography>
                </div>
            </div>
        </div>
    );
}
