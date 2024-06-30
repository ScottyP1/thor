import localFont from 'next/font/local';

const myFont = localFont({ src: '../fonts/Marker.ttf' });

export default function NotFound() {
    return (
        <main className="notFoundBG text-center text-white bg-black h-screen">
            <h1 className={`${myFont.className} text-[150px] mt-[190px] textGradient`}>404</h1>
            <span className='lg:hidden text-lg tracking-[10px]'>Page Not Found</span>
        </main>
    );
}
