import React from "react";

const SvgComponent = props => (
  <svg
    className="prefix__icon"
    viewBox="0 0 1024 1024"
    width={128}
    height={128}
    {...props}
  >
    <defs>
      <style />
    </defs>
    <path d="M749.018 337.239a188.495 188.495 0 01-59.11 22.243c-16.972-17.812-41.165-28.935-67.95-28.935-51.4 0-93.074 41.032-93.074 91.612 0 7.156.796 14.157 2.392 20.892-77.367-3.834-145.96-40.324-191.865-95.755-8.02 13.559-12.606 29.266-12.606 46.081 0 31.77 16.417 59.82 41.408 76.26a94.082 94.082 0 01-42.162-11.476c-.024.399-.024.754-.024 1.151 0 44.4 32.104 81.442 74.686 89.863a95.12 95.12 0 01-24.527 3.19 94.85 94.85 0 01-17.504-1.641c11.832 36.425 46.216 62.877 86.937 63.63-31.858 24.591-71.982 39.214-115.606 39.214a198.245 198.245 0 01-22.2-1.24c41.21 25.967 90.128 41.143 142.702 41.143 171.237 0 264.866-139.601 264.866-260.702 0-3.966-.088-7.909-.265-11.831a188.846 188.846 0 0046.438-47.412c-16.707 7.268-34.63 12.187-53.46 14.401 19.208-11.342 33.965-29.288 40.92-50.69M512 12.885C236.344 12.885 12.885 236.345 12.885 512c0 275.656 223.459 499.115 499.115 499.115S1011.115 787.656 1011.115 512c0-275.655-223.459-499.115-499.115-499.115m0 952.855C261.402 965.74 58.26 762.598 58.26 512 58.26 261.423 261.402 58.26 512 58.26S965.74 261.425 965.74 512c0 250.598-203.142 453.74-453.74 453.74z" />
  </svg>
);

export default SvgComponent;

