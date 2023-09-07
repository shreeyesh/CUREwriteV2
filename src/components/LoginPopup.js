import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLoginRedirect = () => {
    navigate('/login-account');
  };

  const handleLogoClick = () => {
    window.location.href = "https://www.curewrite.com";
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-50" onClick={onClose}></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg z-50 flex flex-col items-center space-y-4">
        <img src="/cwLogo@2x.png" alt="Curewrite Logo" className="cursor-pointer" onClick={handleLogoClick} />
        <h2 className="text-xl font-bold">Please Login to Continue</h2>
        <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out cursor-pointer text-black" onClick={handleLoginRedirect}>Login</button>
      </div>
    </>
  );
};

export default LoginPopup;
