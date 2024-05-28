import React from 'react';
import CarCard from '../Home/CarCard';
import Form from './Form';

function BookingModal({ selectedCar }: { selectedCar: any }) {
  const handleCloseModal = () => {
    const modal = document.getElementById('my_modal_4');
    if (modal) modal.close();
  };

  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
      <div className="flex justify-between items-center border-b-[1px] pb-2">
        <h3 className="text-[30px] font-light text-gray-400">
          Rent A Car Now!
        </h3>
        <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className="w-full md:w-3/4">
          <CarCard car={selectedCar} />
        </div>
        <div>
           <Form />
        </div>
      </div>
    </form>    
  );
}

export default BookingModal;
