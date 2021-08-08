import * as React from "react";

function SvgLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 225 225"
      {...props}
    >
      <path d="M119 69.3c-6 1.7-10.6 4.6-15.5 9.8l-4 4.3 3.8-3.2c5.6-4.8 9.5-6.4 16.3-7 27.1-2.1 43.9 34.1 28.7 62.1-6.1 11.1-17.1 17.4-28.7 16.5-6.8-.6-10.7-2.2-16.3-7-3.4-2.9-3.4-2.7.7 1.6 9.7 10.2 23.4 13 35.2 7.3 6.4-3.2 14.5-11.3 17.7-17.9 5.1-10.6 6.5-25 3.6-36.3-2.3-8.6-5-13.8-10.7-20-8.4-9.2-20.4-13.1-30.8-10.2z" />
      <path d="M63 94.5v5.5h14v36h13v-36h30.8l3.1-5c1.7-2.8 3.1-5.2 3.1-5.5 0-.3-14.4-.5-32-.5H63v5.5z" />
      <path d="M128.9 92.7c-8.1 13.3-9.1 14.6-10.1 12.9-.8-1.3-2.7-1.6-12.3-1.6H95v32h12.5l-.3-13c-.2-7.1.1-13 .5-13s3.2 3.9 6.1 8.5c2.9 4.7 5.6 8.5 6 8.5.4 0 3.3-4 6.4-8.8l5.8-8.7V136h13V89h-13.8l-2.3 3.7z" />
    </svg>
  );
}

export default SvgLogo;
