import React from 'react'

export default function Card({children}) {
  return (
    <div className="w-full max-w-sm mx-auto bg-home text-center border-2 border-bordercolor h-[calc(100vh-3rem)] flex flex-col">
        {children}
    </div>
  )
}
