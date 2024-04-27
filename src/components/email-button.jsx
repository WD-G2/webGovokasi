import React from "react";

const EmailButton = () => {
  return (
    <button className="icon-bg">
      <svg
        className="w-4 h-4 icon-blue"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
        />
        <path
          fill-rule="evenodd"
          d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
        />
      </svg>
    </button>
  );
};

export default EmailButton;