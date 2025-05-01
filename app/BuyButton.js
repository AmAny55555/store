import React from 'react'

function BuyButton({ value = "Buy", className = "" }) {
  return (
    <div>
      <button className={`border-gray-200 border-t-[1px] border-b-[1px] cursor-pointer ${className}`}>
        {value}
      </button>
    </div>
  );
}

export default BuyButton;
