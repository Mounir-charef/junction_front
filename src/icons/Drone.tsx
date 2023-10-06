import { SVGProps } from "react";
const Drone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path
      fill="currentColor"
      d="M24 8V7h-7v1h3v1h-1v2h-3.3l-1.501-2.6H9.855l-1.5 2.6H5V9H4V8h3V7H0v1h3v1H2v5h3v-1h3.167l.216.374A8.002 8.002 0 0 0 4 20.5a.5.5 0 0 0 1 0 7.001 7.001 0 0 1 3.883-6.259l.972 1.683h4.344l.96-1.663A7.002 7.002 0 0 1 19 20.5a.5.5 0 0 0 1 0 8.003 8.003 0 0 0-4.34-7.106l.227-.394H19v1h3V9h-1V8Z"
    />
  </svg>
);
export default Drone;
