import Image from "next/image"
import TopFooter from "../components/TopFooter"
export default function CheckOut () {
    return (
        <div>
            <div className="w-full h-[316px]">
            <Image src="/bg-7.png" alt="background" height="940" width="1946" className="bg-cover bg-no-repeat" />
            </div>

            <div className="w-full h-[1080px] md:h-[555px] grid md:flex md:mt-36 ">
                 <div className="md:ml-52 leading-6">
                    <h1 className="font-bold text-4xl">Log In</h1>  <br />
                    <label htmlFor="userName" className="font-semibold text-2xl pt-16">Username or email address</label> <br />
                     <input type="text" id="userName" className="border-[1px] border-[#9F9F9F] w-[301px] h-[75px] mt-[25px] rounded-lg"/> <br />
                    
                     <label htmlFor="password" className="font-semibold text-2xl pt-16">Password</label> <br />
                     <input type="password" id="password" className="border-[1px] border-[#9F9F9F] w-[301px] h-[75px] mt-[25px] rounded-lg"/> <br />
                    
                    <h1 className="font-medium">Remember</h1>
                    <h1 className="border-[#000000] border-[1px] rounded-lg font-sans w-[225px] text-center h-[50px] md:ml-10 mt-8 p-2 ">Log In</h1>
                 </div>

                  <div className="md:ml-[300px] mt-2 md:mt-0 leading-7">
                  <h1 className="font-bold text-4xl">Register</h1>  <br />
                    <label htmlFor="Email" className="font-semibold text-2xl pt-16">Email address</label> <br />
                     <input type="password" id="Email" className="border-[1px] border-[#9F9F9F] w-[301px] h-[75px] mt-[25px] rounded-lg"/> <br />

                     <p className="font-normal">A link to set a new password will be sent to your email address.</p> <br />
                     <p className="font-normal">Your personal data will be used to support your <br />
                      experience throughout this website, to manage access <br />
                       to your account, and for other purposes described in our <br />
                       <u><b> privacy policy.</b></u></p> <br />

                       <h1 className="border-[#000000] border-[1px] rounded-lg font-sans w-[225px] text-center h-[50px] md:ml-10 mt-8 p-2 ">Register</h1>
                  </div>
            </div>
            <TopFooter />
        </div>
    )
}
