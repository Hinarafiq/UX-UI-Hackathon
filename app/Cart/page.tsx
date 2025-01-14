import Image from "next/image"
import { Trash } from 'lucide-react';
import TopFooter from "../components/TopFooter";
import Link from "next/link";
export default function Cart () {
    return (
        <div>
            <div className="w-full h-[316px]">
            <Image src="/bg-4.png" alt="background" height="940" width="1946" className="bg-cover bg-no-repeat" />
            </div>

            <div className="w-full h-[1440px] md:h-[925px] bg-[#FFFFFF]">
                 <div className="md:w-[1240] h-[690px] md:h-[540px] grid md:flex md:mt-[200px] md:ml-[100px]">
                      <div className="w-full md:w-[817px] md:h-[216px]">
                           <ul className="h-[90px] md:h-[55px] flex font-semibold md:font-bold gap-7 md:gap-24 pl-4 md:pl-24 pt-5 bg-[#FFF9E5]">
                            <li>Product</li>
                            <li className="md:ml-7">Price</li>
                            <li>Quantity</li>
                            <li>Subtotal</li>
                           </ul>

                           <ul className="flex md:mt-16 gap-12">
                            <li><Image src="/AsgaardSofa.png" alt="Asgaard Sofa" height="106" width="106" /></li>
                            <li className="text-[#9F9F9F] hidden md:block">Asgaard Sofa</li>
                            <li className="text-[#9F9F9F]">Rs. 250,000.00</li>
                            <li className="border-[1px] w-6 h-6 font-medium">1</li>
                            <li className="font-medium">Rs. 250,000.00</li>
                            <li><Trash  className="text-[#FBEBB5]"/></li>
                           </ul>
                      </div>

                      <div className="md:h-[390px] md:w-[393px] pt-3 md:pt-[60px] pl-[120px] md:ml-[104px] bg-[#FFF9E5]">
                          <h1 className="font-bold text-2xl">Cart Totals</h1>  
                          <div className="pt-[80px] flex gap-10 leading-10"> 
                           <ul className="font-medium">
                            <li>Subtotal</li>
                            <li>Total</li>
                           </ul>

                           <ul>
                            <li className="text-[#9F9F9F]">Rs. 250,000.00</li>
                            <li className="text-[#B88E2F]">Rs. 250,000.00</li>
                           </ul>
                           </div>
                           <Link href="/CheckOut"><h1 className="border-[#000000] border-[1px] rounded-lg font-sans w-[125px] h-[50px] mt-8 p-2 ">Check Out</h1></Link>
                      </div>
                 </div>
                 <TopFooter />
            </div>
        </div>
    )
}
