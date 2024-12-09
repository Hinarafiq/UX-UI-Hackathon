import Image from "next/image"
export default function Products () {
    return (
        <div className="w-full h-[1240px] md:h-[772px] grid md:flex justify-around bg-[#FAFAF4]">

           <div className="w-full md:w-[605px] h-[462px] pt-[90px] md:ml-[100px]">
              <Image src="/GraniteSquareSideTable.png" 
              alt="Granite Square Side Table" 
              height="1029" width="1029" />
              <ul className="font-medium gap-24 text-3xl text-center">
                <li>Side Table</li>
                <li><u>View More</u></li>
              </ul>
           </div>

           <div className="w-full md:w-[605px] h-[462px] pt-[90px] md:ml-[100px]">
              <Image src="/CloudSofaThreeSeater+Ottoman.png" 
              alt="Cloud Sofa Three Seater + Ottoman" 
              height="1029" width="1029" />
              <ul className="font-medium gap-24 text-3xl text-center">
                <li>Side Table</li>
                <li><u>View More</u></li>
              </ul>
           </div>
        </div>
    )
}