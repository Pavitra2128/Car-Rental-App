import React from 'react';

function Form() {
  return (
    <form className="flex flex-wrap gap-4">
      {/* Pickup Location Dropdown */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <label htmlFor="pickupLocation" className="block mb-1 text-gray-400">Pickup Location</label>
        <select id="pickupLocation" name="pickupLocation" className="w-full p-2 border border-gray-300 rounded-md">
          {/* Add options for pickup locations */}
          <option value="solo">Solo</option>
          <option value="greede">Greede</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Pickup Date and Drop-off Date */}
      <div className="w-full md:flex md:space-x-4 lg:w-1/3">
        <div className="w-full">
          <label htmlFor="pickupDate" className="block mb-1 text-gray-400">Pickup Date</label>
          <input type="date" id="pickupDate" name="pickupDate" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="w-full">
          <label htmlFor="dropoffDate" className="block mb-1 text-gray-400">Drop-off Date</label>
          <input type="date" id="dropoffDate" name="dropoffDate" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
      </div>

      {/* Pickup Time and Drop-off Time */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <label htmlFor="pickupTime" className="block mb-1 text-gray-400">Pickup Time</label>
        <input type="time" id="pickupTime" name="pickupTime" className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <label htmlFor="dropoffTime" className="block mb-1 text-gray-400">Drop-off Time</label>
        <input type="time" id="dropoffTime" name="dropoffTime" className="w-full p-2 border border-gray-300 rounded-md" />
      </div>

      {/* Contact Number */}
      <div className="w-full">
        <label htmlFor="contactNumber" className="block mb-1 text text-gray-400">Contact Number</label>
        <input type="tel" id="contactNumber" name="contactNumber" className="w-full p-2 border border-gray-300 rounded-md" />
      </div>

      {/* Submit Button */}
      <div className="w-full">
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
      </div>
    </form>
  );
}

export default Form;
