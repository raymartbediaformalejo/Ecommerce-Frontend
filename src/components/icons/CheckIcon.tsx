import { SVGProps } from "react";

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14px"
      height="14px"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="m5 13l4 4L19 7"
      ></path>
    </svg>
  );
}
