import Image from "next/image"
import Link from "next/link"
export default function Blog () {
    return (
        <div className="w-full h-[1740px] md:h-[744px] bg-[#FFFFFF]">

             <div className="w-full md:w-[459px] h-[91px] md:ml-[740px]">
               <ul>
                <li className="font-bold mt-6 text-5xl md:ml-6">Our Blogs</li>
                <li className="text-[#9F9F9F] mt-8">Find a bright ideal to suit your taste with our great selection</li>
               </ul>
             </div>

              <div className="w-full md:w-[1240px] h-[679px] md:ml-[300px] gap-4 mt-14">

                  <div className="md:w-[1240px] h-[555px] grid md:flex justify-around">

                     <div className="md:w-[399px]">
                       <Image src="/Rectangle13.png" alt="Blog1" height="393" width="393" />
                       <ul className="mt-4 text-center">
                        <li className="font-sans text-2xl">Going all-in with millennial design</li>
                        <li className="font-bold text-2xl"><u>Read More</u></li>
                        <li className="text-2xl font-serif">5 min 12th Oct 2022</li>
                       </ul>
                     </div>

                     <div className="md:w-[399px]">
                       <Image src="/Rectangle14.png" alt="Blog2" height="393" width="393" />
                       <ul className="mt-4 text-center">
                        <li className="font-sans text-2xl">Going all-in with millennial design</li>
                        <li className="font-bold text-2xl"><u>Read More</u></li>
                        <li className="text-2xl font-serif">5 min 12th Oct 2022</li>
                       </ul>
                     </div>

                     <div className="md:w-[399px]">
                       <Image src="/Rectangle15.png" alt="Blog3" height="393" width="393" />
                       <ul className="mt-4 text-center">
                        <li className="font-sans text-2xl">Going all-in with millennial design</li>
                        <li className="font-bold text-2xl"><u>Read More</u></li>
                        <li className="text-2xl font-serif">5 min 12th Oct 2022</li>
                       </ul>
                     </div>
                  </div>

                 <Link href="/BlogDetails"><h1 className="w-full md:w-[400px] h-[49px] md:ml-[420px] text-3xl mt-[990px] md:mt-0 text-center"><u>View All Post</u></h1></Link>
              </div>
        </div>
    )
}