import React, { useState } from 'react';
import CarCard from './CarCard';
import BookingModal from '../CarBooking/BookingModal';
import { SignIn, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';

function CarsList(props: any) {
  const [selectedCar,setSelectedCar]=useState<any>([]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {props.carsList.map((car: any, index: number) => (
       <div key={index}onClick={()=>{(document as any).getElementById('my_modal_4').showModal();setSelectedCar(car)}}>
       
        <CarCard car={car} />
        </div>
      ))}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_4" className="modal">
<SignedIn>
  <BookingModal selectedCar={selectedCar}/>
  </SignedIn>
  <SignedOut>
    <SignIn mode='modal' />
    
  </SignedOut>
</dialog>
    </div>
  );
}

export default CarsList;


