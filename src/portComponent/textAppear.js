import React, { useState, useEffect } from 'react';
const TextAppear = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleText(prevText => prevText + text.charAt(prevText.length));
    }, 150); // Adjust the interval as needed
    return () => clearInterval(interval);
  }, [text]);
  return (
    <div className="overflow-hidden">
      <span className="text-2xl sm:text-4xl  text-[#4a5255] font-serif leading-relaxed w-fit p-2 rounded-md" >
        {visibleText}
      </span>
    </div>
  );
};
export default TextAppear;