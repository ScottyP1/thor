import localFont from 'next/font/local';
import React from 'react';

const myFont = localFont({ src: '../fonts/Marker.ttf' });

export default function Home() {
    return (
        <main className="absolute top-0 left-0 right-0 bg-black text-white text-center h-screen overflow-hidden">
            <video className="absolute top-0 left-0 object-cover w-full h-full" controls={false} loop muted autoPlay playsInline>
                <source src="/videos/homeBG.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className=" absolute z-10 flex flex-col mt-24 xl:mt-32 h-full ml-5 xl:ml-4 text-center">
                <h1 className="text-2xl xl:text-6xl tracking-[55px] text-center ml-8">THOR</h1>
                <h2 className={`textGradient text-4xl xl:text-8xl tracking-[25px]`}>TRANSPORT</h2>
            </div>
        </main>
    );
}
