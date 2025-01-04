import Image from "next/image"

export default function Hero(){
    return (
        <div className="w-full h-[900px]  bg-[#FBEBB5] grid md:flex">
            <div className="w-[340px] h-[192px] pt-64 md:pt-[345px] ml-4 md:ml-[142px] leading-[96px]">
               <h1 className="font-bold text-2xl md:text-6xl">Rocket single seater</h1>
               <h1 className="w-[121px] h-[49px] mt-6 text-xl md:text-2xl"><u>Shop Now</u></h1>
            </div>

            <div>
                <Image src="/RocketSingleSeater.png" alt="Rocket Single Seater" height="953" width="800" className="overflow-auto md:ml-[100px]" />
            </div>
        </div>
    )
}
