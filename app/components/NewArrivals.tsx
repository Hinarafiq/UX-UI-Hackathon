import Image from "next/image"
import Link from "next/link"
export default function NewArrivals () {
    return (
        <div className="w-full h-[850px] md:h-[793px] grid md:flex bg-[#FFF9E5]">
             <div>
                <Image src="/AsgaardSofa.png" alt="Asgaard Sofa" height="799" width="983"/>
             </div>

             <div className="w-[260px] md:w-[631px] h-[245px] ml-9 md:ml-60 mt-44 md:mt-72">
               <ul className="leading-10 tracking-widest text-center">
                <li className="font-semibold text-2xl md:text-3xl">New Arrivals</li>
                <li className="text-4xl md:text-7xl font-bold">Asgaard Sofa</li>
                <Link href="/AsgaadarSofa"><li className="border-solid border-black md:text-2xl font-sans border-5 mt-5">Order Now</li></Link>
               </ul>
             </div>
        </div>
    )
}