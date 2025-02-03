import * as React from "react";
const Star: React.FC<object> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <path
      d="M7.99967 1.33301L10.0597 5.50634L14.6663 6.17968L11.333 9.42634L12.1197 14.013L7.99967 11.8463L3.87967 14.013L4.66634 9.42634L1.33301 6.17968L5.93967 5.50634L7.99967 1.33301Z"
      fill="#FDE047"
      stroke="#FDE047"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Star;
