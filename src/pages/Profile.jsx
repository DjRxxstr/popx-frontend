import React from 'react';
import Card from '../components/Card';

export default function Profile() {
  return (
    <div className="min-h-screen flex justify-center bg-background py-6">
      <Card>
        <div className="flex-grow flex flex-col justify-start font-display text-left text-sm text-gray-700">

          <div className='bg-white p-5'>
            <p className="text-[17px] text-gray-800">
              Account Settings
            </p>
          </div>

          <div className='p-5 flex flex-col gap-4 border-b-2 border-gray-300 border-dashed'>

            <div className="flex flex-row gap-6">

              <div className="relative w-22 h-22">
                <img
                  src="/profile.PNG"
                  alt="Profile"
                  className="w-22 h-22 rounded-full object-cover"
                />

                <div className="absolute bottom-0 right-0 bg-buttonA rounded-full p-[6px] shadow-md">
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      className="stroke-white fill-white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"
                    />

                    <path
                      className="stroke-buttonA fill-white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                    />
                    
                  </svg>
                </div>
              </div>


              <div className='flex flex-col'>
                <div>
                  <p className="text-black font-bold">Marry Doe</p>
                </div>

                <div>
                  <p className="text-gray-800">Marry@Gmail.com</p>
                </div>

              </div>



            </div>

            <div>
              <p className="text-gray-900 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
          </div>



        </div>
      </Card>
    </div>
  );
}