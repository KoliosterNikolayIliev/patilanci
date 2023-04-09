import React, { createContext, useState } from 'react';

// Create language context
export const AppContext = createContext();

// Create language context provider component
export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [carouselImages, setCarouselImages] = useState(null)

  const changeLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'bg' : 'en'));
  };

  return (
    <AppContext.Provider value={{ language, changeLanguage , carouselImages, setCarouselImages}}>
      {children}
    </AppContext.Provider>
  );
};