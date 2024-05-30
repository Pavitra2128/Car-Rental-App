import React, { useState ,useEffect} from 'react';
import Image from 'next/image';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { FaGasPump } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

function CarCard(props: any) {
  const [car, setCar] = useState<any>();

  useEffect(()=>{
if(props.car)
  {
    setCar(props.car)
  }
  },[props.car])
  return car&&(
    <div className="relative border border-transparent p-4 rounded-md shadow-md flex flex-col justify-between hover:border-blue-500 group transition-all">
      <div>
        <h2 className="text-[20px] font-bold medium mb-2 ">{car.name}</h2>
        <h2 className="text-[28px] font-bold mb-2">
          ₹{car.price}
          <span className="text-[12px] font-light">/day</span>
        </h2>
        <Image
          src={car.image?.url}
          alt={car.name}
          width={220}
          height={200}
          className="w-[250px] h-[150px] mb-3 object-contain"
        />
        <div className="flex justify-between">
          <div className="text-center text-gray-500">
            <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">{car.seats} Seat</h2>
          </div>
          <div className="text-center text-gray-500">
            <FaGasPump className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">{car.carAvg} MPG</h2>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-3">
          <h2 className="line-clamp-5 text-[14px] font-light">{car.carType}</h2>
        </div>
      </div>
      <button className="mt-4 p-2 bg-white text-blue-500 border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white flex items-center justify-center transition opacity-0 group-hover:opacity-100">
        Rent Now <BsArrowRight className="ml-2" />
      </button>
    </div>
  );
}

export default CarCard;
