import Image from "next/image"
import { SlidersHorizontal } from 'lucide-react';
import { GripVertical } from 'lucide-react';
import { ChartNoAxesGantt } from 'lucide-react';
import TopFooter from "../components/TopFooter";
import Link from "next/link";

export default function Shop() {
    return (
        <div>
            <div className="w-full h-316px">
              <Image src="/bg-2.png" alt="background" height="1440" width="1946" className="bg-cover bg-no-repeat" />
            </div>

           
             <div className="w-full h-[300px] md:h-[100px] grid md:flex pt-6 pl-16  bg-[#fdf9f9] ">
                 <ul className="md:flex font-medium gap-8">
                    <li><SlidersHorizontal /></li>
                    <li>Filter</li>
                    <li><GripVertical /></li>
                    <li><ChartNoAxesGantt /></li>
                    <li>| Showing 1-8 of 14 lists</li>
                 </ul>
                 
                 <ul className="md:ml-[800px] font-semibold">
                 <li>Show 8</li>
                 <li>Short By Default</li>
                 </ul>
             </div>

              <div className="grid md:flex">

                <div className="w-[287px] gap-4 h-[372px] md:ml-[100px]">
                  <Image src="/TrentoModularSofa.png" alt="Trento Modular Sofa" height="287" width="287" className="ml-[90px]" />
                   <h1 className="font-normal leading-6 text-center ml-28">Trenton Modular Sofa_3</h1>
                   <h1 className="font-medium leading-9 text-center ml-32">Rs. 25,000.00</h1>
                </div>

                <div className="w-[287px] gap-4 h-[372px] md:ml-[100px]">
                  <Image src="/GraniteDinningTableWithDinningChair.png" alt="Granite dining table with dining chair" height="287" width="287" className="ml-[90px]" />
                   <h1 className="font-normal leading-6 text-center ml-28">Granite dining table with dining chair</h1>
                   <h1 className="font-medium leading-9 text-center ml-32">Rs. 25,000.00</h1>
                </div>

                <div className="w-[287px] gap-4 h-[372px] md:ml-[100px]">
                  <Image src="/OutdoorBarTable&Stool.png" alt="Outdoor bar table and stool" height="287" width="287" className="ml-[90px]" />
                   <h1 className="font-normal leading-6 text-center ml-28">Outdoor bar table and stool</h1>
                   <h1 className="font-medium leading-9 text-center ml-32">Rs. 25,000.00</h1>
                </div>

                <div className="w-[287px] gap-4 h-[372px] md:ml-[100px]">
                  <Image src="/TrentoModularSofa.png" alt="Plain console with teak mirror " height="287" width="287" className="ml-[90px]" />
                   <h1 className="font-normal leading-6 text-center ml-28">Plain console with teak mirror</h1>
                   <h1 className="font-medium leading-9 text-center ml-32">Rs. 25,000.00</h1>
                </div>
              </div>

              <div className="grid md:flex mt-6">

                <div className="w-[287px] gap-4 h-[372px] md:ml-[100px]">
                 <Image src="/GraniteSquareSideTable.png" alt="Granite square side table" height="287" width="287" className="md:ml-[90px]" />
                 <h1 className="font-normal leading-6 text-center ml-28">Granite square side table</h1>
                 <h1 className="font-medium leading-9 text-center ml-32">Rs. 258,800.00</h1>
                </div>

                <div className="w-[287px] gap-4 h-[372px] md:ml-[100px]">
                  <Image src="/CloudSofaThreeSeater+Ottoman.png" alt="Cloud sofa three seater" height="287" width="287" className="md:ml-[90px]" />
                  <h1 className="font-normal leading-6 text-center mt-9 ml-28">Cloud sofa three seater</h1>
                  <h1 className="font-medium leading-9 text-center ml-32">Rs. 115,000.00</h1>
                </div>

                <Link href="/AsgaadarSofa"><div className="w-[287px] gap-4 h-[372px] md:ml-[100px]">
                 <Image src="/AsgaardSofa.png" alt="Asgaard sofa" height="287" width="287" className="ml-[90px]" />
                 <h1 className="font-normal leading-6 text-center mt-9 ml-28">Asgaard sofa</h1>
                 <h1 className="font-medium leading-9 text-center ml-32">Rs. 25,000.00</h1>
                </div></Link>

                <div className="w-[287px] gap-4 h-[372px] md:ml-[100px]">
                 <Image src="/OutDoorSofa.png" alt="Outdoor sofa set" height="287" width="287" className="ml-[90px]" />
                 <h1 className="font-normal leading-6 text-center ml-28">Outdoor sofa set</h1>
                 <h1 className="font-medium leading-9 text-center ml-32">Rs. 244,000.00</h1>
                </div>
             </div>

       <div className="p-8 md:ml-[822px]">
        <ul className=" border-white gap-9 flex ">
          <li className="bg-[#FFF9E5] w-6 h-6 ">1</li>
          <li  className="bg-[#FFF9E5] w-6 h-6 ">2</li>
          <li  className="bg-[#FFF9E5] w-6 h-6 ">3</li>
          <li  className="bg-[#FFF9E5] w-12 h-6 ">Next</li>
        </ul>
       </div>
              <TopFooter />
        </div>
    )
}