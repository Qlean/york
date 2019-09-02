import React from 'react'

export default function IconBurger({ className }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...{ className }}
    >
      <path
        d="M5.5 9C4.67157 9 4 9.57563 4 10.2857C4 10.9958 4.67157 11.5714 5.5 11.5714H24.5C25.3284 11.5714 26 10.9958 26 10.2857C26 9.57563 25.3284 9 24.5 9H5.5Z"
        fill="#222222"
      />
      <path
        d="M5.5 18.4286C4.67157 18.4286 4 19.0042 4 19.7143C4 20.4244 4.67157 21 5.5 21H24.5C25.3284 21 26 20.4244 26 19.7143C26 19.0042 25.3284 18.4286 24.5 18.4286H5.5Z"
        fill="#222222"
      />
    </svg>
  )
}
