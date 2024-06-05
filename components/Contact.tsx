import React from 'react';
import { FaCar, FaAward, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black space-y-10 p-8 border-t-2 border-grey-500">
      {/* Zip Car Rentals */}
      <div className="w-full max-w-3xl p-8 border border-blue-500 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center"><FaCar className="inline mr-2" />Zip Car Rentals</h1>
        <p className="text-gray-700">
          Zip Car Rentals is a leading car rental service provider offering a wide range of vehicles for rent.
          With competitive prices and excellent customer service, we strive to make your car rental experience
          convenient and hassle-free.
        </p>
      </div>

      {/* Achievements */}
      <div className="w-full max-w-3xl p-8 border border-blue-500 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center"><FaAward className="inline mr-2" />Our Achievements</h1>
        <p className="text-gray-700">
          Over 2000 successful car rentals, providing premium quality and safety.
        </p>
      </div>

      {/* Locations */}
      <div className="w-full max-w-3xl p-8 border border-blue-500 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center"><FaMapMarkerAlt className="inline mr-2" />Our Locations</h1>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Visakhapatnam</h2>
            <p>1234 Ocean Drive</p>
            <p>Visakhapatnam, India</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Kakinada</h2>
            <p>5678 Palm Street</p>
            <p>Kakinada, India</p>
          </div>
        </div>
      </div>

      {/* Contact Numbers */}
      <div className="w-full max-w-3xl p-8 border border-blue-500 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center"><FaPhone className="inline mr-2" />Contact Numbers</h1>
        <div className="flex flex-col space-y-4">
          <p><strong>Visakhapatnam:</strong> +91 1234567890</p>
          <p><strong>Kakinada:</strong> +91 9876543210</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
