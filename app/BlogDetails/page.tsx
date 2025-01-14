import Image from "next/image"
import TopFooter from "../components/TopFooter"
export default function CheckOut () {
    return (
        <div>
            <div className="w-full h-[316px]">
            <Image src="/bg-6.png" alt="background" height="940" width="1946" className="bg-cover bg-no-repeat" />
            </div>

            <div className="w-full h-[3000px] md:h-[2719px] text-center leading-9 md:pt-56">
              <Image src="/Rectangle14.png" alt="Blog1" height="817" width="500" className="md:ml-[400px]"/>
              <ul className="flex gap-9 md:ml-[450px] font-medium">
                <li>Admin</li>
                <li>14 Oct 2022</li>
                <li>Wood</li>
              </ul>
              <h1 className="text-4xl font-semibold ">Going all-in with millennial design</h1>
              <p className="text-[#9F9F9F] tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />
               dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br />
               aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br />
                in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br />
                 ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
              </p>
              <h1 className="font-medium"><u>Read More</u></h1>
         
              <Image src="/Rectangle13.png" alt="Blog2" height="817" width="500" className="md:ml-[400px]"/>
              <ul className="flex gap-9 md:ml-[450px] font-medium">
                <li>Admin</li>
                <li>14 Oct 2022</li>
                <li>Wood</li>
              </ul>
              <h1 className="text-4xl font-semibold ">Going all-in with millennial design</h1>
              <p className="text-[#9F9F9F] tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />
               dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br />
               aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br />
                in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br />
                 ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
              </p>
              <h1 className="font-medium"><u>Read More</u></h1>

              
              <Image src="/Rectangle15.png" alt="Blog3" height="817" width="500" className="md:ml-[400px]"/>
              <ul className="flex gap-9 md:ml-[450px] font-medium">
                <li>Admin</li>
                <li>14 Oct 2022</li>
                <li>Wood</li>
              </ul>
              <h1 className="text-4xl font-semibold ">Going all-in with millennial design</h1>
              <p className="text-[#9F9F9F] tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />
               dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br />
               aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br />
                in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br />
                 ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
              </p>
              <h1 className="font-medium"><u>Read More</u></h1>
              
              <div className="p-8 md:ml-[442px]">
                <ul className=" border-white gap-9 flex ">
                   <li className="bg-[#FFF9E5] w-6 h-6 ">1</li>
                  <li  className="bg-[#FFF9E5] w-6 h-6 ">2</li>
                   <li  className="bg-[#FFF9E5] w-6 h-6 ">3</li>
                   <li  className="bg-[#FFF9E5] w-12 h-6 ">Next</li>
                 </ul>
               </div>
            </div>
            <TopFooter />
        </div>
    )
}
