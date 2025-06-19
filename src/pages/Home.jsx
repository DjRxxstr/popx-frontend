import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

export default function Home() {
    return (
        <div className="min-h-screen flex justify-center bg-background py-6">

            <Card>
                <div className="overflow-y-auto flex-grow flex flex-col px-4 py-5 sm:p-5 justify-end space-y-6">
                    <div className="w-3/4 text-left">
                        <div>
                            <p
                                className="font-display text-[27px] font-bold text-gray-800">
                                Welcome to PopX
                            </p>
                        </div>

                        <div>
                            <p className="font-display text-[18px] text-gray-500 mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit
                            </p>
                        </div>


                    </div>

                    <div className="space-y-4">
                        <Link to="create-account" className="block">
                            <Button whichButton='A'>
                                Create Account
                            </Button>
                        </Link>

                        <Link to="login" className="block">
                            <Button whichButton='B'>
                                Already Registered? Login
                            </Button>
                        </Link>
                    </div>
                </div>
            </Card>

        </div>
    )
}