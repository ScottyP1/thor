import ContactForm from "@/components/ContactForm";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
// import MapBox from "@/components/Map";

export default function Contact() {
    return (
        <div className="mt-6 m-3 ">
            <h1 className="text-center text-2xl xl:text-4xl tracking-[15px]">CONTACT</h1>
            <div className="flex flex-wrap bg-black/[.6] rounded-lg p-4 md:w-1/2 mx-auto">
                <div className=" mx-auto w-full xl:w-3/5 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-center mb-4 text-red-500">
                            <p className="mx-auto ">MC# 1374944</p>
                            <p className="mx-auto">DOT# 3810434</p>
                        </div>
                        <ContactForm />
                    </div>
                    <div className="mt-4 w-full flex flex-col mx-auto">
                        <span className="text-sm md:text-md mb-3">Call, Email or fill out the form and we'll get with you shortly.</span>
                        <div className="flex flex-col md:flex-row md:justify-between">
                            <a href="tel:3042832528" className="flex text-lg justify-center mb-2 md:mb-0">
                                <MdOutlinePhoneIphone className="m-1" />
                                <span>(304) 283-2528</span>
                            </a>
                            <a href="mailto:shawnscott@thortransp.com" className="flex text-lg justify-center">
                                <MdEmail className="m-1" />
                                <span>thortransport22@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
