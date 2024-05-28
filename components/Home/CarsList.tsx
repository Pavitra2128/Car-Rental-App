import React from 'react';
import CarCard from './CarCard';

function CarsList(props: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {props.carsList.map((car: any, index: number) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
}

export default CarsList;


