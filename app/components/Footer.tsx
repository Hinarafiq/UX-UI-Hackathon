export default function Footer (){
    return (
        <div className="w-[200px] md:w-[1440px] h-[100px] md:h-[455px] bg-[#FFFFFF]">
            <div className="w-[620px] md:w-[1240.01px] h-[419px] md:ml-[240px]">
                {/* Footer Top Section */}
                <div className="w-[400px] md:w-[1131px]  grid md:flex h-[312px] ml-[70px] md:ml-[140.01px] border-gray-400">
                   <h1 className="w-[258px] h-[92px] md:ml-[102px] mt-28 text-[#9F9F9F] font-normal leading-6">400 University Drive Suite 200 Coral <br />Gables,<br />FL 331334 USA</h1>
                  
                   <ul className="w-[140px] h-[232px] flex-col leading-9 mt-20 md:ml-[80px]">
                    <li className="text-[#9F9F9F] font-medium">Links</li>
                    <li className="font-semibold">Home</li>
                    <li className="font-semibold">Shop</li>
                    <li className="font-semibold">About</li>
                    <li className="font-semibold">Contact</li>
                   </ul>

                   <ul className="w-[140px] h-[232px] leading-10 mt-20 ">
                    <li className="text-[#9F9F9F] font-medium">Help</li>
                    <li className="font-semibold">Payment Options</li>
                    <li className="font-semibold">Returns</li>
                    <li className="font-semibold">Privacy Policies</li>
                   </ul>

                   <ul className="w-[286px] h-[101px] mt-20 leading-9 ml-5">
                    <li className="text-[#9F9F9F] font-semibold">Newletter</li>
                    <li><u className="text-[#9F9F9F] tracking-wider">Enter Your Email Address</u>   <u className="text-black">Subscribe</u></li>
                   </ul>
                </div>

                <hr className="mt-[700px] md:mt-0 w-[400px] md:w-full"/>

                 <div className="w-[200px] md:w-[1240px] h-[39px] ml-[100px] text-[#000000] font-medium leading-2 md:leading-6 mt-3">
                    <h1 >2022 Meubel House. <br className="block lg:hidden"/> All rights reverved</h1>
                 </div>
            </div>
        </div>
    )
} 