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
    <path
      d="M365.714 731.429q0-30.286-21.428-51.715t-51.715-21.428-51.714 21.428-21.428 51.715 21.428 51.714 51.714 21.428 51.715-21.428 21.428-51.714zm200.572 53.714Q558.857 652 465.429 558.57T238.857 457.714q-8-.571-13.714 5.143T219.429 476v73.143q0 7.428 4.857 12.571t12.285 5.715q88 6.285 150.858 69.142T456.57 787.43q.572 7.428 5.715 12.285t12.571 4.857H548q7.429 0 13.143-5.714t5.143-13.714zm219.428.571q-2.857-88-32-170T674 467.143 556.857 350t-148.571-79.714-170-32q-8-.572-13.143 5.143-5.714 5.714-5.714 13.142v73.143q0 7.429 5.142 12.572T237.143 348q116.571 4 216 63.714t159.143 159.143 63.714 216q.571 7.429 5.714 12.572t12.572 5.142h73.143q7.428 0 13.142-5.714 6.286-5.143 5.143-13.143zm165.143-548v548.572q0 68-48.286 116.285t-116.285 48.286H237.714q-68 0-116.285-48.286T73.143 786.286V237.714q0-68 48.286-116.285t116.285-48.286h548.572q68 0 116.285 48.286t48.286 116.285z"
      fill="#2c2c2c"
    />
  </svg>
);

export default SvgComponent;
