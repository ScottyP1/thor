import ContactForm from "@/components/ContactForm"

import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import MapBox from "@/components/Map";

export default function Contact() {
    return (
        <main className="contactBG text-center text-white">
            <div className="mt-24 xl:mt-32 mx-4 xl:mx-32 bg-black/[.6] rounded-lg p-4">
                <h1 className="text-center text-2xl xl:text-4xl tracking-[15px]">CONTACT US</h1>
                <p className="hidden md:text-md">Call, Email us or fill out the form and well get back to you.</p>
                <div className="flex flex-wrap justify-center">
                    <div className="mt-6 mx-auto w-full xl:w-3/5">
                        <ContactForm />
                    </div>
                    <div className="mt-4 w-full">
                        <span className="text-[12px] xl:text-lg">Call, Email or fill out the form and well get with you shortly.</span>
                        <a href="tel:3042832528" className="flex text-lg mt-4">
                            <MdOutlinePhoneIphone className="m-1" />
                            (304)283-2528
                        </a>
                        <a href="mailto:shawnscott@thortransp.com" className="flex text-lg">
                            <MdEmail className="m-1" />
                            shawnscott@thortransp.com
                        </a>
                        {/* <MapBox /> */}
                    </div>

                </div>
            </div>
        </main>
    )
}