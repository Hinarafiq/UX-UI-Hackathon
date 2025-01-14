import Image from "next/image"
import TopFooter from "../components/TopFooter"
export default function CheckOut () {
    return (
        <div>
            <div className="w-full h-[316px]">
            <Image src="/bg-5.png" alt="background" height="940" width="1946" className="bg-cover bg-no-repeat" />
            </div>

            <div className="w-full grid md:flex h-[1849px] md:h-[1249px]">
                 <div className="md:w-[608px] h-[480px] md:h-[1014px] md:ml-[200px] md:pt-[279px]">
                    <h1 className="font-bold text-4xl">Billing details</h1> 
                     <label htmlFor="fName" className="font-semibold text-2xl pt-16">First Name</label> <br />
                     <input type="text" id="fName" className="border-[1px] border-[#9F9F9F] w-[211px] h-[75px] mt-[25px] rounded-lg"/> <br />
                    
                     <label htmlFor="lName" className="font-semibold text-2xl pt-16">Last Name</label> <br />
                     <input type="text" id="lName" className="border-[1px] border-[#9F9F9F] w-[211px] h-[75px] mt-[25px] rounded-lg"/> <br />
               
                     <label htmlFor="Country" className="font-semibold text-2xl pt-16">Country / Region</label> <br />
                     <input type="text" id="Country" className="border-[1px] border-[#9F9F9F] w-[411px] h-[75px] mt-[25px] rounded-lg"/> <br />
                
                     <label htmlFor="Address" className="font-semibold text-2xl pt-16">Street Address</label> <br />
                     <input type="text" id="Address" className="border-[1px] border-[#9F9F9F] w-[411px] h-[75px] mt-[25px] rounded-lg"/> <br />
                     
                     <label htmlFor="Number" className="font-semibold text-2xl pt-16">Phone Number</label> <br />
                     <input type="number" id="Number" className="border-[1px] border-[#9F9F9F] w-[411px] h-[75px] mt-[25px] rounded-lg"/> <br />
                
                     <label htmlFor="Email" className="font-semibold text-2xl pt-16">Email Address</label> <br />
                     <input type="email" id="Email" className="border-[1px] border-[#9F9F9F] w-[411px] h-[75px] mt-[25px] rounded-lg"/> <br />
               
                     <input type="text" placeholder="Additional Information" className="border-[1px] border-[#9F9F9F] w-[411px] h-[75px] mt-[25px] p-4 rounded-lg"/> <br />
                </div> 

                <div className="md:w-[608px] h-[789px] ml-4 md:ml-[50px] pt-[279px]">
                     <div className="grid md:flex justify-between leading-9"> 
                        <ul>
                            <li className="font-bold text-3xl">Product</li>
                            <li className="text-[#9F9F9F] font-medium">Asgaard sofa - 1</li>
                            <li className="font-medium">Subtotal</li>
                            <li className="font-medium">Total</li>
                        </ul>

                        <ul>
                            <li  className="font-bold text-3xl">Subtotal</li>
                            <li className="font-medium">Rs. 250,000.00</li>
                            <li className="font-medium">Rs. 250,000.00</li>
                            <li className="font-bold text-[#B88E2F] text-2xl" >Rs. 250,000.00</li>
                        </ul>
                     </div>
                     <hr />

                     <div className="md:w-[528px] h-[407px]  pt-5">
                          <h1 className="font-bold ">Direct Bank Transfer</h1> <br />
                          <p className="text-[#9F9F9F] md:tracking-wider">Make your payment directly into our bank account. Please use <br />
                           your Order ID as the payment reference. Your order will not be <br />
                            shipped until the funds have cleared in our account.</p> <br />
                          <h1 className="text-[#9F9F9F]">Direct Bank Transfer</h1> <br />
                          <h1 className="text-[#9F9F9F]">Cash On Delivery</h1> <br />
                          <p className="md:tracking-wider">Your personal data will be used to support your experience <br /> 
                          throughout this website, to manage access to your account, and <br />
                           for other purposes described in our <u><b> privacy policy.</b></u></p>
                          <h1 className="border-[#000000] border-[1px] rounded-lg font-sans w-[225px] text-center h-[50px] md:ml-20 mt-8 p-2 ">Place order</h1>
                     </div>
                </div>
            </div>
            <TopFooter />
        </div>
    )
}
