import React from 'react';

const Loader = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  const handleLogoClick = () => {
    window.location.href = "https://www.curewrite.com";
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-50" onClick={onClose}></div>
      <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg z-50 flex flex-col items-center space-y-4 animate-blink`}>
        <img src="/cwLogo@2x.png" alt="Curewrite Logo" className="cursor-pointer" onClick={handleLogoClick} />
        <span className='text-black text-base'>{content}</span>
      </div>
    </>
  );
};

export default Loader;
