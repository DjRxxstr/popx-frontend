import React from 'react'

export default function Button({children, whichButton, props}) {
  let className = 'cursor-pointer py-[12px] w-full rounded-sm font-display font-medium text-sm';

  if (whichButton === 'A'){
    className = className + ' bg-buttonA text-white'
  } else{
    className = className + ' bg-buttonB text-black'
  }

  return (
    <button {...props}
    className={className}>{children}</button>
  )
}
