import React from 'react';
import logo from '../public/logo.png';

const LogoLoader = () => {
  return (
    <div className="logo-loader-container">
      <img className="pulsating-loader" src={logo} alt="Rotating Loader" />
    </div>
  );
};

export default LogoLoader;