import { getStoreLocations } from '@/services';
import React, { useEffect, useState } from 'react';

function SearchInput({ setLocation }: any) {
  const [locationList, setLocationList] = useState<string[]>([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    const result: any = await getStoreLocations();
    setLocationList(result.storedLocations.map((loc: any) => loc.address));
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg font-sans">
      <h2 className="text-center text-2xl text-black font-bold mb-4">Let's Search What You Need</h2>
      <div className="flex items-center w-full max-w-md">
        <div className="flex bg-gray-100 p-3 px-5 gap-4 rounded-full shadow-inner divide-x divide-gray-300 w-full">
          <div className="flex items-center pr-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400">
              <path fillRule="evenodd" d="M11.54 22.3511.07.04.028.016a" clipRule="evenodd" />
            </svg>
            <select
              className="ml-2 bg-transparent border-none text-gray-400 focus:outline-none font-medium"
              onChange={(e) => setLocation(e.target.value)}
            >
              <option disabled selected className="font-bold">Location</option>
              {locationList.map((location: string, index: number) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center pl-4">
            <input
              type="date"
              className="bg-transparent text-gray-400 focus:outline-none font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
