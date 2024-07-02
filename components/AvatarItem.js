'use client';

import { Typography } from "@material-tailwind/react";
import profileImg from '@/public/profileImg.jpg';
import Image from "next/image";

export default function AvatarItem() {
    return (
        <div className="flex flex-col items-center m-3 mb-12 bg-black/[.8] rounded-lg md:flex-row md:items-start">
            <div className="w-20 h-20 md:w-32 md:h-32 overflow-hidden rounded-full relative m-3">
                <Image
                    src={profileImg}
                    alt="avatar"
                    width={128}
                    height={128}
                    className='object-cover absolute top-[-20px] left-0 right-0'
                />
            </div>
            <div className="flex-1 my-auto">
                <Typography className="tracking-[5px] text-md font-medium">Shawn Scott</Typography>
                <Typography color="red" className="tracking-[5px] text-md font-medium">
                    CEO - Founder
                </Typography>
            </div>
            <div className="flex flex-col m-3 p-3 my-auto">
                <Typography className="tracking-[5px] text-md font-medium">MC# 1374944</Typography>
                <Typography className="tracking-[5px] text-md font-medium">DOT# 3810434</Typography>
            </div>
        </div>
    );
}
