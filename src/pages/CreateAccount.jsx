import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function CreateAccount() {
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="min-h-screen flex justify-center bg-background py-6">
            <Card>
                <div className="p-5 flex-grow flex flex-col justify-between">
                    <div className="space-y-6">
                        <div className="text-left w-2/3">
                            <p className="font-display text-[27px] font-bold text-gray-800">
                                Create your PopX account
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-7 text-left font-display text-sm text-gray-700">
                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-home px-1 text-[12px] text-buttonA">
                                    Full name<span className="text-red-500 ml-0.5">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Marry Doe"
                                    className="w-full pl-4 pb-2 pt-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-buttonA"
                                />
                            </div>

                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-home px-1 text-[12px] text-buttonA">
                                    Phone number<span className="text-red-500 ml-0.5">*</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue="1234567890"
                                    className="w-full pl-4 pb-2 pt-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-buttonA"
                                />
                            </div>

                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-home px-1 text-[12px] text-buttonA">
                                    Email address<span className="text-red-500 ml-0.5">*</span>
                                </label>
                                <input
                                    type="email"
                                    defaultValue="marry@example.com"
                                    className="w-full pl-4 pb-2 pt-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-buttonA"
                                />
                            </div>

                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-home px-1 text-[12px] text-buttonA">
                                    Password<span className="text-red-500 ml-0.5">*</span>
                                </label>
                                <input
                                    type="password"
                                    defaultValue="********"
                                    className="w-full pl-4 pb-2 pt-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-buttonA"
                                />
                            </div>

                            <div className="relative">
                                <label className="absolute -top-2 left-3 bg-home px-1 text-[12px] text-buttonA">
                                    Company name
                                </label>
                                <input
                                    type="text"
                                    defaultValue="PopX Inc."
                                    className="w-full pl-4 pb-2 pt-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-buttonA"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 text-buttonA text-[12px]">
                                    Are you an Agency?<span className="text-red-500 ml-0.5">*</span>
                                </label>
                                <div className="flex space-x-4 mt-1">
                                    <label className="flex items-center space-x-1">
                                        <input type="radio" name="agency" value="Yes"  className="accent-[#6c25ff]" />
                                        <span>Yes</span>
                                    </label>
                                    <label className="flex items-center space-x-1">
                                        <input type="radio" name="agency" value="No"  className="accent-[#6c25ff]" />
                                        <span>No</span>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="pt-4">
                        <Link to='/profile'>
                            <Button type="submit" whichButton="A">Create Account</Button>
                        </Link>
                        
                    </div>
                </div>
            </Card>
        </div>
    );
}