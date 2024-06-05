'use client'; // Ensure this file is treated as a Client Component

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { UserButton } from '@clerk/nextjs';

function NavBar() {
    return (
        <div className="flex items-center justify-between p-0.5 px-5 shadow-sm border-b-3 ">
            <Link href="/">
                <div>
                    <Image src='/logo.png' alt='logo' width={100} height={100} />
                </div>
            </Link>
            <div className='hidden md:flex gap-5'>
                <Link href="/">
                    <div className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>Home</div>
                </Link>
                <Link href="/history">
                    <div className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>History</div>
                </Link>
                <Link href="/contact">
                    <div className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'>Contact Us</div>
                </Link>
            </div>
            <UserButton />
        </div>
    );
}

export default NavBar;
