import Stats from "@/components/Stats";
import AvatarItem from "@/components/AvatarItem";

export default function About() {
    return (
        <div className="mt-6 m-3">
            <h1 className="text-center text-2xl xl:text-4xl tracking-[15px]">ABOUT US</h1>
            <div className="flex flex-col lg:flex-row mt-3 p-4">
                <div className="lg:w-1/2 flex flex-col justify-between">
                    <p className="text-sm md:text-[15px] md:tracking-[3px] mb-7 me-2 text-start">
                        Welcome to Thor Transport! My name is Shawn Scott, and I am the proud owner and operator of Thor Transport.
                        With over 15 years of experience in the transportation industry, I have built a reputation for reliability,
                        precision, and excellence. At Thor Transport, we are dedicated to getting your cargo where it needs to be, whenever
                        it needs to be there. Over the years, I have driven for many top carriers, gaining valuable experience and insights
                        into the logistics and transportation industry. This extensive background has equipped me with the skills and
                        knowledge necessary to start my own company. For the past three years, as a private owner, I have successfully
                        managed and fulfilled numerous deliveries, consistently meeting and exceeding customer expectations.
                        At Thor Transport, we pride ourselves on maintaining a perfect track record. With zero errors or mishaps, you can
                        rest assured that your cargo is in good hands.
                    </p>
                    <AvatarItem />
                </div>
                <div className="flex flex-col lg:w-1/2 mb-12 md:mb-0">
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="relative w-full h-[200px] xl:h-[400px]">
                        <video className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" controls={false} loop muted autoPlay playsInline>
                            <source src="/videos/about.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <Stats />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
