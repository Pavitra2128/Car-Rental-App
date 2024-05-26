import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
function NavBar() {
    return (
        <div className="flex items-center justify-between p-0.5 px-5 shadow-sm border-b-3 ">

           <Image src='/logo.png'
           alt='logo'
           width={100}
           height={100} 
           />
           <div className='hidden md:flex gap-5'>
            <h2 className='hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white'>Home</h2>
             <h2 className='hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white'>history</h2>
             <h2 className='hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white'>contact us</h2>

           </div>
           <UserButton />
        </div>
    )
}

export default NavBar;