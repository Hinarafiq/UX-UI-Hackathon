export default function TopFooter(){
    return (
        <div className="w-full h-[700px] md:h-[300px] grid md:flex bg-[#FAFAF4]">
          <div className="md:w-[376px] h-[108px] pt-32 ml-[20px] md:ml-[100px]">
             <ul>
                <li className="text-[#000000] font-bold text-4xl">Free Delivery</li>
                <li className="font-normal text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</li>
             </ul>
          </div>

          <div className="md:w-[376px] h-[108px] pt-32 ml-[20px] md:ml-[224px]">
             <ul>
                <li className="text-[#000000] font-bold text-4xl">90 Days Return</li>
                <li className="font-normal text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</li>
             </ul>
          </div>

        
          <div className="md:w-[376px] h-[108px] pt-32 ml-[20px] md:ml-[224px]">
             <ul>
                <li className="text-[#000000] font-bold text-4xl">Secure Payment</li>
                <li className="font-normal text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</li>
             </ul>
          </div>
        </div>
    )
}
