import { ChevronRight} from 'lucide-react';
import Image from 'next/image';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';

export default function AsgaardSofaInfo(){
    return (
        <div>
            <div className="w-full h-[100px] pt-[40px] md:pl-[140px]">
                  <ul className='flex gap-6'>
                    <li className='text-[#9F9F9F]'>Home</li>
                    <li><ChevronRight /></li>
                    <li className='text-[#9F9F9F]'>Shop</li>
                    <li><ChevronRight /></li> |
                    <li>Asgaard Sofa</li>
                  </ul>
            </div>

            <div className='w-full h-[1280px] md:h-[820px] pt-[101px]  bg-[#FFFFFF]'>
                  {/* Details Of Products */}
               <div className='md:w-[1241px] grid md:flex justify-between h-[630px] md:ml-[109px]'>
                    <div>
                        <Image src="/InfoOfSofa.png" alt='Images Of Sofa' height="500" width="553" className='md:ml-[99px] '/>
                    </div>

                    <div className='w-[283px] md:w-[606px] md:h-[730px] ml-4 md:ml-[243px] '>
                         <div className='leading-8'>
                            <h1>Asgaard sofa</h1>
                            <h1>Rs. 250,000.00</h1>
                            <h1><Image src="/Stars.png" alt="Halfstars" height="20" width="124" /> 5 Customer Reviews</h1>
                            <h1>Setting the bar as one of the loudest speakers in its class, the <br />
                             Kilburn is a compact, stout-hearted hero with a well-balanced <br />
                             audio which boasts a clear midrange and extended highs for a <br /> sound.</h1>
                            <h1>Size</h1>
                            <ul className='flex gap-6'>
                                <li><Image src="/S-ExtraLarge.png" alt='Extra Large' height="30" width="30" /></li>
                                <li><Image src="/S-Large.png" alt='Large' height="30" width="30" /></li>
                                <li><Image src="/S-ExtraSmall.png" alt='Extra Small' height="30" width="30" /></li> </ul>
                            <h1>Color</h1>
                             <ul className='flex gap-6'>
                                <li><Image src="/C-Purple.png" alt='Purple' height="30" width="30"/></li>
                                <li><Image src="/C-Black.png" alt='Black' height="30" width="30"/></li>
                                <li><Image src="/C-Brown.png" alt='Brown' height="30" width="30"/></li>
                             </ul>
                             <ul className='flex gap-6 mt-4'>
                                <li><Image src="/Button-1.png" alt='Button1' width="123" height="64"/></li>
                                <li><Image src="/Button-2.png" alt='Button2' width="214" height="64"/></li>
                             </ul> 
                             <hr className='mt-3' />
                               
                               <div className='flex gap-6'>
                                <ul className='text-[#9F9F9F]'>
                                    <li>SKU:</li>
                                    <li>Category:</li>
                                    <li>Tags:</li>
                                    <li>Share:</li>
                                </ul>
                                <ul>
                                    <li className='text-[#9F9F9F]'>SS001</li>
                                    <li className='text-[#9F9F9F]'>Sofas</li>
                                    <li className='text-[#9F9F9F] gap-2'>Sofa,Chair,Home,Shop</li>
                                    <li className='flex gap-3 text-black'> 
                                       <Facebook />
                                       <Linkedin />
                                       <Twitter />
                                    </li>
                                </ul>
                               </div>
                         </div>
                    </div> 
               </div>
            </div> 
            {/* Description of Product */}
            <div className='w-full h-[1440px] md:h-[784px] bg-[#faf8f8]'>

                <div className='md:w-[649px] h-[36px] ml-4 md:ml-[596px] pt-16'>
                    <ul className='font-semibold  grid md:flex md:justify-around  text-2xl'>
                        <li >Description</li>
                        <li className='text-[#9F9F9F]'>Additional Information</li>
                        <li className='text-[#9F9F9F]'>Reviews[5]</li>
                    </ul>
                </div>

                <div className='md:w-[1026x] h-[60px] md:h-[174px] md:ml-[227px] pt-20 mt-4 font-normal text-[#9F9F9F]'>
                   <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and <br />
                   sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                            <br />
                   <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br />
                    speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br /> and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br />
                     to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>

                <div className='md:w-[1239px] h-[528px] grid md:flex pt-[656px] md:pt-[156px]'>
                    <Image src="/DescriptionPic.png" alt='Description' height="348" width="605" className='md:ml-[40px]'/>
                    <Image src="/DescriptionPic2.png" alt='Description' height="348" width="605" className='md:ml-[40px]'/>
                </div>
           </div>
        </div>
    )
}
