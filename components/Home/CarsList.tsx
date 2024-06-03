import React, { useState } from 'react';
import CarCard from './CarCard';
import BookingModal from '../CarBooking/BookingModal';
import { SignIn, SignedIn, SignedOut } from '@clerk/nextjs';

function CarsList(props: any) {
  const [selectedCar, setSelectedCar] = useState<any>([]);

  // Function to close the modal
  const closeModal = () => {
    const modal = document.getElementById('my_modal_4') as HTMLDialogElement;
    if (modal) {
      modal.close(); // Close the dialog properly
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {props.carsList.map((car: any, index: number) => (
        <div key={index} onClick={() => {
          const modal = document.getElementById('my_modal_4') as HTMLDialogElement;
          if (modal) {
            modal.showModal();
          }
          setSelectedCar(car);
        }}>
          <CarCard car={car} />
        </div>
      ))}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-content">
          {/* Close button */}
          <span className="close" onClick={closeModal} style={{ color: 'black', float: 'right', fontSize: '32px', fontWeight: 'bold', cursor: 'pointer' }}>&times;</span>

          <SignedIn>
            <BookingModal selectedCar={selectedCar}/>
          </SignedIn>
          <SignedOut>
            <SignIn routing="hash" />
          </SignedOut>
        </div>
      </dialog>
    </div>
  );
}

export default CarsList;
