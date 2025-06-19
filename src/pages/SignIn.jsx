import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function SignIn() {
  return (
    <div className="min-h-screen flex justify-center bg-background py-6">
      <Card>
        <div className="p-5 flex-grow flex flex-col justify-start font-display text-left text-sm text-gray-700 space-y-6">

          <div className="text-left w-3/4">
            <p className="text-[27px] font-bold text-gray-800">
              Sign in to your PopX account
            </p>
            <p className="text-[17px] mt-2 text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-home px-1 text-[12px] text-buttonA">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full pl-4 pb-2 pt-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-buttonA"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 bg-home px-1 text-[12px] text-buttonA">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full pl-4 pb-2 pt-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-buttonA"
              />
            </div>

            <div>
              <Link to="../profile">
                <Button whichButton="A">Login</Button>
              </Link>
            </div>
          </div>

        </div>
      </Card>
    </div>
  );
}