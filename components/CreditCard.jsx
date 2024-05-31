
import React from 'react';

const CreditCardManager = () => {
  return (
    <div className='flex justify-center'>
 <div className=" flex flex-row items-center justify-center   h-full bg-[#ede4c5]  rounded-3xl w-3/4  pb-20" >
        <div>
        <h2 className="text-5xl bold f
        mb-4 text-center text-green-800
        ">Manage All Your Credit Cards in One Place.</h2>
        <p className="text-center mb-4 text-black">
          Keep track of multiple credit cards effortlessly within the GreenBank app. Monitor balances, track transactions, and stay on top of payments without switching between different accounts.
        </p>
        </div>
      <div className="w-3/4  rounded-lg">
       
        <div className="relative w-full h-64 ">
          <div
            className="absolute inset-0 rounded-lg overflow-hidden "
            data-framer-background-image-wrapper="true"
          >
            
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default CreditCardManager;

