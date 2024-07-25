import React from 'react';

function Color({ color }) {
  const colorClass = `bg-${color}`;
  
  return (
    <div className={`w-[50px] h-[50px]  ${colorClass}`}> 
         
    </div>
  );
}

export default Color;