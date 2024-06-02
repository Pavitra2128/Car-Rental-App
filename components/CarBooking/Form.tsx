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
    carId: ''
  });

  const [errors, setErrors] = useState({
    pickupLocation: '',
    pickupDate: '',
    dropoffDate: '',
    pickupTime: '',
    dropoffTime: '',
    contactNumber: ''
  });

  useEffect(() => {
    getStoreLocations_();
  }, []);

  useEffect(() => {
    if (car) {
      setFormValue((prevFormValue) => ({
        ...prevFormValue,
        carId: car.id // Assign car id from prop
      }));
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
    const { name, value } = event.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value
    }));

    // Clear error for the changed field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validateForm = () => {
    const newErrors: any = {};
    let isValid = true;

    if (!formValue.pickupLocation) {
      newErrors.pickupLocation = 'Pickup location is required';
      isValid = false;
    }
    if (!formValue.pickupDate) {
      newErrors.pickupDate = 'Pickup date is required';
      isValid = false;
    }
    if (!formValue.dropoffDate) {
      newErrors.dropoffDate = 'Dropoff date is required';
      isValid = false;
    }
    if (!formValue.pickupTime) {
      newErrors.pickupTime = 'Pickup time is required';
      isValid = false;
    }
    if (!formValue.dropoffTime) {
      newErrors.dropoffTime = 'Dropoff time is required';
      isValid = false;
    }
    if (!formValue.contactNumber) {
      newErrors.contactNumber = 'Contact number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formValue.contactNumber)) {
      newErrors.contactNumber = 'Contact number must be exactly 10 digits';
      isValid = false;
    }
    if (formValue.pickupDate && formValue.dropoffDate) {
      const pickupDate = new Date(formValue.pickupDate);
      const dropoffDate = new Date(formValue.dropoffDate);
      if (pickupDate >= dropoffDate) {
        newErrors.dropoffDate = 'invalid drop off date';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    console.log('handleSubmit called'); 
    if (validateForm()) {
      console.log('Form is valid. Submitting:', formValue); // Add logging
      try {
        const resp = await createBooking(formValue);
        console.log('Response from createBooking:', resp);
        if (resp) {
          setShowToastMsg(true);
          window.location.href = '/';
        }
      } catch (error) {
        console.error('Error creating booking:', error);
      }
    } else {
      console.log('Form is not valid. Errors:', errors); 
    }
  };

  return (
    <form className="flex flex-wrap gap-4">
      <div className="w-full md:w-1/2 lg:w-1/3">
        <label htmlFor="pickupLocation" className="block mb-1 text-gray-400">Pickup Location</label>
        <select id="pickupLocation" name="pickupLocation" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} value={formValue.pickupLocation}>
          <option disabled selected value="">Pickup Location?</option>
          {storeLocation.map((loc: any, index: number) => (
            <option key={index} value={loc.address}>{loc.address}</option>
          ))}
        </select>
        {errors.pickupLocation && <span className="text-red-500">{errors.pickupLocation}</span>}
      </div>

      {/* Pickup Date and Drop-off Date */}
      <div className="w-full">
        <label htmlFor="pickupDate" className="block mb-1 text-gray-400">Pickup Date</label>
        <input type="date" id="pickupDate" name="pickupDate" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} value={formValue.pickupDate} />
        {errors.pickupDate && <span className="text-red-500">{errors.pickupDate}</span>}
      </div>
      <div className="w-full">
        <label htmlFor="dropoffDate" className="block mb-1 text-gray-400">Drop-off Date</label>
        <input type="date" id="dropoffDate" name="dropoffDate" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} value={formValue.dropoffDate} />
        {errors.dropoffDate && <span className="text-red-500">{errors.dropoffDate}</span>}
      </div>

      {/* Pickup Time and Drop-off Time */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <label htmlFor="pickupTime" className="block mb-1 text-gray-400">Pickup Time</label>
        <input type="time" id="pickupTime" name="pickupTime" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} value={formValue.pickupTime} />
        {errors.pickupTime && <span className="text-red-500">{errors.pickupTime}</span>}
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <label htmlFor="dropoffTime" className="block mb-1 text-gray-400">Drop-off Time</label>
        <input type="time" id="dropoffTime" name="dropoffTime" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} value={formValue.dropoffTime} />
        {errors.dropoffTime && <span className="text-red-500">{errors.dropoffTime}</span>}
      </div>

      {/* Contact Number */}
      <div className="w-full">
        <label htmlFor="contactNumber" className="block mb-1 text text-gray-400">Contact Number</label>
        <input type="tel" id="contactNumber" name="contactNumber" className="w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} value={formValue.contactNumber} />
        {errors.contactNumber && <span className="text-red-500">{errors.contactNumber}</span>}
      </div>


      <div className="w-full flex justify-end items-center mt-4">
        <button type="button" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm" onClick={handleSubmit}>Save</button>
        <button type="button" className="p-2 ml-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm" onClick={() => window.location.href = '/'}>Close</button>
      </div>
    </form>
  );
}

export default Form;
