import React from 'react';
import Image from 'next/image';

function Hero({ scrollToCarsList }: { scrollToCarsList: () => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold">
          Premium Car <span className="text-blue-500">Rental</span> in Your Area
        </h2>
        <h2 className="text-[20px] text-gray-700">
          Book the Car Now
        </h2>
        <button 
          className="p-2 mt-5 bg-blue-500 text-white px-4 rounded-full hover:scale-105 transition-all"
          onClick={scrollToCarsList} // Call scrollToCarsList when button is clicked
        >
          Explore Cars
        </button>
      </div>
      <div className="md:flex md:justify-center md:items-center">
        <Image
          src="/hero.png"
          alt="hero"
          width={380} 
          height={2500} 
          className="object-cover" 
        />
      </div>
    </div>
  );
}

export default Hero;
