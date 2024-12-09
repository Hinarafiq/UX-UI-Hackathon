import { User } from 'lucide-react';
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Header () {
    return(
        <div className="w-full h-[80px] bg-[#FBEBB5]">
            {/* Header Components */}
            <ul className="w-[430px] h-[24px] pt-[28px] gap-14 ml-[605px] leading-6 flex bg-[#FBEBB5] text-[#000000] font-medium">
                <Link href="/"><li className='hover:underline'>Home</li></Link>
                <Link href="/Shop"><li className='hover:underline'>Shop</li></Link>
                <li className='hover:underline'>About</li>
                <Link href="/Contact"><li className='hover:underline'>Contact</li></Link>
            </ul>

            <ul className="w-[247px] h-[28px] flex ml-[1493px] bg-[#FBEBB5] gap-12">
                <Link href="/MyAccount"><li><User /></li></Link>
                <li><Search /></li>
                <li><Heart /></li>
                <Link href="/Cart"><li><ShoppingCart /></li></Link>
            </ul>
        </div>
    )
}