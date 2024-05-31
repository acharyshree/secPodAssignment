import Image from 'next/image';
import React from 'react';


const PartnersAndOffer = () => {
  return (
    <div className=" p-8">
      {/* Partners Section */}
      <div className="text-center mb-12">
        <h2 className="text-green-700 text-lg font-medium">WE ARE PARTNERED WITH MORE THAN 50+ COMPANIES AROUND THE GLOBE.</h2>
        <div className="relative overflow-hidden h-10 mt-4">
          <div className="flex space-x-8 animate-marquee">
            <Image src="" alt="Partner 1" className="h-8"  objectFit='fill' />
            <Image src="" alt="Partner 2" className="h-8"   objectFit='fill'/>
            <Image src="" alt="Partner 3" className="h-8" objectFit='fill'  />
            <Image src="" alt="Partner 4" className="h-8" objectFit='fill' />
            {/* Repeat logos to create a continuous effect */}
            {/* <Image src="path/to/logo1.png" alt="Partner 1" className="h-8" />
            <Image src="path/to/logo2.png" alt="Partner 2" className="h-8" />
            <Image src="path/to/logo3.png" alt="Partner 3" className="h-8" />
            <Image src="path/to/logo4.png" alt="Partner 4" className="h-8" /> */}
          </div>
        </div>
      </div>
      
      {/* Offer Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Discover What We <span className="text-green-400">Offer</span>
        </h1>
        <p className="mt-4 text-gray-700">
</p>

      </div>
    </div>
  );
};

export default PartnersAndOffer;
