import Stats from "@/components/Stats";

export default function About() {
    return (
        <main className="min-h-full absolute top-0 left-0 right-0 text-white bg-black">
            <div className="mt-24">
                <h1 className="text-center text-2xl xl:text-4xl tracking-[15px]">ABOUT OUR COMPANY</h1>
            </div>
            <div className="flex flex-col w-full">
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow card bg-base-300 rounded-box place-items-center relative p-4">
                    <div className="w-full h-[200px] xl:h-[400px] relative">
                        <video className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" controls={false} loop muted autoPlay playsInline>
                            <source src="/videos/about.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div> {/* Dark overlay */}
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <Stats />
                        </div>
                    </div>
                </div>
                <div className="grid flex-grow card bg-base-300 rounded-box place-items-center p-4">
                    <p className="text-md">Welcome to Thor Transport! My name is Shawn Scott, and I am the proud owner and operator of Thor Transport.
                        With over 15 years of experience in the transportation industry, I have built a reputation for reliability,
                        precision, and excellence. At Thor Transport, we are dedicated to getting your cargo where it needs to be, whenever
                        it needs to be there. Over the years, I have driven for many top brands, gaining invaluable experience and insights
                        into the logistics and transportation industry. This extensive background has equipped me with the skills and
                        knowledge necessary to start my own company. For the past two years, as a private owner, I have successfully
                        managed and fulfilled numerous deliveries, consistently meeting and exceeding customer expectations.
                        At Thor Transport, we pride ourselves on maintaining a perfect track record. With zero errors or mishaps, you can
                        rest assured that your cargo is in good hands.</p>
                </div>
            </div>
        </main>
    );
}
