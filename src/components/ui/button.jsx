import React from "react";

export function Button({ children, type = 'button', className = '', ...props }) {
  return (
    <button
      type={type}
      className={`bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
