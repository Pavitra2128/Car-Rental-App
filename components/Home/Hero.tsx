import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold">
          Premium Car Rental in Your Area
        </h2>
        <h2 className="text-[20px] text-gray-700">
          Book the Car Now
        </h2>
        <button className="p-2 mt-5 bg-blue-500 text-white px-4 rounded-full hover:scale-105 transition-all">
          Explore Cars
        </button>
      </div>
      <div className="md:flex md:justify-center md:items-center"> {/* Center the content vertically and horizontally in md screens */}
        <Image
          src="/hero.png"
          alt="hero"
          width={380} // Adjust the width of the image
          height={2500} // Adjust the height of the image
          className="object-cover" // Remove the unnecessary class
        />
      </div>
    </div>
  );
}

export default Hero;
