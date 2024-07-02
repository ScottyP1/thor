import ContactForm from "@/components/ContactForm";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
// import MapBox from "@/components/Map";

export default function Contact() {
    return (
        <div className="mt-6 m-3">
            <h1 className="text-center text-2xl xl:text-4xl tracking-[15px]"> CONTACT US</h1>
            <div className="flex flex-wrap bg-black/[.6] rounded-lg p-4 md:w-1/2 mx-auto">
                <div className="mt-2 mx-auto w-full xl:w-3/5">
                    <div className="flex justify-center mb-4 text-red-500">
                        <p className="mx-auto ">MC# 1374944</p>
                        <p className="mx-auto mb-6">DOT# 3810434</p>
                    </div>
                    <ContactForm />
                </div>
                <div className="mt-4 w-full">
                    <span className="text-[12px] xl:text-lg">Call, Email or fill out the form and we'll get with you shortly.</span>
                    <a href="tel:3042832528" className="flex text-lg mt-4 items-center">
                        <MdOutlinePhoneIphone className="m-1" />
                        <span>(304) 283-2528</span>
                    </a>
                    <a href="mailto:shawnscott@thortransp.com" className="flex text-lg items-center">
                        <MdEmail className="m-1" />
                        <span>Work: shawnscott@thortransp.com</span>
                    </a>
                    <a href="mailto:thortransport22@gmail.com" className="flex text-lg items-center">
                        <MdEmail className="m-1" />
                        <span>Personal: thortransport22@gmail.com</span>
                    </a>
                    {/* <MapBox /> */}
                </div>
            </div>
        </div >
    );
}
