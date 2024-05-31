import React, { useContext, useEffect, useState } from 'react';
import { createBooking, getStoreLocations } from '@/services';
import { BookCreatedFlagContext } from '@/context/BookCreatedFlagContext';

function Form({ car }: any) {
  const [storeLocation, setStoreLocation] = useState<any>([]);
  const { showToastMsg, setShowToastMsg } = useContext(BookCreatedFlagContext);

  const [formValue, setFormValue] = useState({
    pickupLocation: '',
    pickupDate: '',
    dropoffDate: '',
    pickupTime: '',
    dropoffTime: '',
    contactNumber: '',
    userName: '',
    carId: ""
  });

  const [errors, setErrors] = useState({
    pickupLocation: '',
    pickupDate: '',
    dropoffDate: '',
    pickupTime: '',
    dropoffTime: '',
    contactNumber: '',
    userName: ''
  });

  useEffect(() => {
    getStoreLocations_();
  }, []);

  useEffect(() => {
    if (car) {
      setFormValue({
        ...formValue,
        carId: car.id // Assign car id from prop
      });
    }
  }, [car]);

  const getStoreLocations_ = async () => {
    try {
      const locations: any = await getStoreLocations();
      console.log(locations);
      setStoreLocation(locations?.storedLocations);
    } catch (error) {
      console.error('Error fetching store locations:', error);
    }
  };

  const handleChange = (event: any) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async () => {
    let isValid = true;
    const newErrors: any = {};

    // Check if all fields are filled
    Object.keys(formValue).forEach(key => {
      if (!formValue[key]) {
        newErrors[key] = 'This field is required.';
        isValid = false;
      }
    });

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // Submit the form if valid
    console.log(formValue);
    const resp = await createBooking(formValue);
    console.log(resp);
    if (resp) {
      setShowToastMsg(true);
      window.location.href = '/';
    }
  };

  return (
    <form className="flex flex-wrap gap-4">
      {/* Pickup Location Dropdown */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <label htmlFor="pickupLocation" className="block mb-1 text-gray-400">Pickup Location</label>
        <select id="pickupLocation" name="pickupLocation" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange}>
          <option disabled selected>Pickup Location?</option>
          {storeLocation.map((loc: any, index: number) => (
            <option key={index}>{loc.address}</option>
          ))}
        </select>
        {errors.pickupLocation && <span className="text-red-500">{errors.pickupLocation}</span>}
      </div>

      {/* Pickup Date and Drop-off Date */}
      <div className="w-full">
        <label htmlFor="pickupDate" className="block mb-1 text-gray-400">Pickup Date</label>
        <input type="date" id="pickupDate" name="pickupDate" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />
        {errors.pickupDate && <span className="text-red-500">{errors.pickupDate}</span>}
      </div>
      <div className="w-full">
        <label htmlFor="dropoffDate" className="block mb-1 text-gray-400">Drop-off Date</label>
        <input type="date" id="dropoffDate" name="dropoffDate" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />
        {errors.dropoffDate && <span className="text-red-500">{errors.dropoffDate}</span>}
      </div>

      {/* Pickup Time and Drop-off Time */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <label htmlFor="pickupTime" className="block mb-1 text-gray-400">Pickup Time</label>
        <input type="time" id="pickupTime" name="pickupTime" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />
        {errors.pickupTime && <span className="text-red-500">{errors.pickupTime}</span>}
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <label htmlFor="dropoffTime" className="block mb-1 text-gray-400">Drop-off Time</label>
        <input type="time" id="dropoffTime" name="dropoffTime" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />
        {errors.dropoffTime && <span className="text-red-500">{errors.dropoffTime}</span>}
      </div>

      {/* Contact Number */}
      <div className="w-full">
        <label htmlFor="contactNumber" className="block mb-1 text text-gray-400">Contact Number</label>
        <input type="tel" id="contactNumber" name="contactNumber" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />
        {errors.contactNumber && <span className="text-red-500">{errors.contactNumber}</span>}
      </div>

      <div className="w-full flex justify-end items-center mt-4">
        <button type="button" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm" onClick={handleSubmit}>Save</button>
        <button type="button" className="p-2 ml-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm" onClick={() => window.location.href = '/'}>close</button>
      </div>
    </form>
  );
}

export default Form;
