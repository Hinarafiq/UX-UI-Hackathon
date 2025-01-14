import Image from "next/image"
export default function TopPicks () {
    return (
        <div className="w-full h-[1890px] md:h-[457px] bg-[#FFFFFF]">

             <div className=" md:ml-[324px] ">
                 <h1 className="w-[348px] h-[96px] md:h-[54px] font-medium text-2xl md:text-4xl ml-5 md:ml-36 mt-8 leading-10">Top Picks For You</h1>
                 <p className="text-[#9F9F9F] ml-4">Find a bright ideal to suit your taste with our <br className="block lg:hidden" /> great selection of suspension, floor <br className="block lg:hidden" /> and table lights.</p>
             </div>

              <div className="grid md:flex">

                <div className="w-[247px] gap-4 h-[372px] md:ml-[50px]">
                  <Image src="/TrentoModularSofa.png" alt="Trento Modular Sofa" height="287" width="287" className="ml-[90px]" />
                   <h1 className="font-normal leading-6 text-center ml-28">Trenton Modular Sofa_3</h1>
                   <h1 className="font-medium leading-9 text-center ml-32">Rs. 25,000.00</h1>
                </div>

                <div className="w-[247px] gap-4 h-[372px] md:ml-[50px]">
                  <Image src="/GraniteDinningTableWithDinningChair.png" alt="Granite dining table with dining chair" height="287" width="287" className="ml-[90px]" />
                   <h1 className="font-normal leading-6 text-center ml-28">Granite dining table with dining chair</h1>
                   <h1 className="font-medium leading-9 text-center ml-32">Rs. 25,000.00</h1>
                </div>

                <div className="w-[247px] gap-4 h-[372px] md:ml-[50px]">
                  <Image src="/OutdoorBarTable&Stool.png" alt="Outdoor bar table and stool" height="287" width="287" className="ml-[90px]" />
                   <h1 className="font-normal leading-6 text-center ml-28">Outdoor bar table and stool</h1>
                   <h1 className="font-medium leading-9 text-center ml-32">Rs. 25,000.00</h1>
                </div>

                <div className="w-[247px] gap-4 h-[372px] md:ml-[50px]">
                  <Image src="/TrentoModularSofa.png" alt="Plain console with teak mirror " height="287" width="287" className="ml-[90px]" />
                   <h1 className="font-normal leading-6 text-center ml-28">Plain console with teak mirror</h1>
                   <h1 className="font-medium leading-9 text-center ml-32">Rs. 25,000.00</h1>
                </div>
              </div>
        </div>
    )
}
