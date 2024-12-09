import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Menu } from 'lucide-react';
  import { User } from 'lucide-react';
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import Link from "next/link";

  const MobHeader = () => {
       return (
        <div className="bg-[#FBEBB5] w-full pt-3">
            <Sheet>
  <SheetTrigger className=" flex"><Menu className="w-14"/>
    <ul className="flex ml-32 gap-3">
        <Link href="/MyAccount"><li><User /></li></Link>
        <li><Search /></li>
        <li><Heart /></li>
        <Link href="/Cart"><li><ShoppingCart /></li></Link>
    </ul>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
    <ul className="gap-14 items-start mt-6 mr-44 leading-9 text-[#000000] font-medium">
                <Link href="/"><li className='hover:underline'>Home</li></Link>
                <Link href="/Shop"><li className='hover:underline'>Shop</li></Link>
                <li className='hover:underline'>About</li>
                <Link href="/Contact"><li className='hover:underline'>Contact</li></Link> 
            </ul>
      <SheetDescription>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
       )
  }
  export default MobHeader;