import Image from "next/image"
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Clock5 } from 'lucide-react';
import TopFooter from "../components/TopFooter";

export default function Contact() {
    return (
        <div>
            <div className="w-full h-316px">
            <Image src="/bg-3.png" alt="background" height="1440" width="1946" className="bg-cover bg-no-repeat" />
            </div>
            
            <div className="text-center md:ml-[3px]">
              <h1 className="font-semibold mt-[40px] text-4xl">Get In Touch With Us</h1>
              <br />
              <h1 className="font-normal mt-2 text-[#9F9F9F]">For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</h1>
            </div>

            <div className="w-[923px] h-[1298px] md:h-[668px] pt-[136px] grid md:flex md:ml-[521px]">

                <div className="w-[393px] h-[537px] leading-9 ml-8 md:ml-8">
                      <ul className="flex gap-6 font-bold text-2xl">
                        <li><MapPin /></li>
                        <li>Address</li>
                       </ul>
                        <h1>236 5th SE Avenue, New <br /> York NY10000, United <br /> States</h1>

                        <ul className="flex gap-6 font-bold text-2xl">
                        <li><Phone /></li>
                        <li>Phone</li>
                       </ul>
                        <h1>Mobile: +(84) 546-6789 <br />
                        Hotline: +(84) 456-6789</h1>

                        <ul className="flex gap-6 font-bold text-2xl">
                        <li><Clock5 /></li>
                        <li>Working Time</li>
                       </ul>
                        <h1>Monday-Friday: 9:00 - 22:00 <br />
                        Saturday-Sunday: 9:00 - 21:00</h1>
                </div>

                <div className=" ml-3 md:ml-0 leading-9">
                    <label htmlFor="name">Your Name</label> <br />
                    <input type="text" id="name" placeholder="Abc" className="border-black p-1 rounded-md border-solid border-[1px]"/> <br />

                    <label htmlFor="email">Email Address</label> <br />
                    <input type="email" id="email" placeholder="abc@gmail.com" className="border-black p-1 rounded-md border-solid border-[1px]"/> <br />

                    <label htmlFor="subj">Subject</label> <br />
                    <input type="text" id="subj" placeholder="This is an optional" className="border-black p-1 rounded-md border-solid border-[1px]"/> <br />

                    <label htmlFor="msg">Message</label> <br />
                    <textarea name="" id="msg" className="border-black p-5 rounded-md border-solid border-[1px]">Hii I had like to ask about</textarea> <br />
                    
                    <button className="border-black p-2 rounded-md border-solid border-[1px]">Submit</button>
                </div>
            </div>
            <TopFooter />
        </div>
    )
}
