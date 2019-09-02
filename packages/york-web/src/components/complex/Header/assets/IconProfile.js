import React from 'react'

export default function IconProfile(props) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="15" cy="15" r="10" stroke="#222222" strokeWidth="2" />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="4"
        y="4"
        width="22"
        height="22"
      >
        <circle cx="15" cy="15" r="11" fill="#222222" />
      </mask>
      <g mask="url(#mask0)">
        <circle
          cx="14.9994"
          cy="12.7999"
          r="3.4"
          stroke="#222222"
          strokeWidth="2"
        />
        <circle
          cx="15.551"
          cy="32.0497"
          r="12.75"
          stroke="#222222"
          strokeWidth="2"
        />
      </g>
    </svg>
  )
}
