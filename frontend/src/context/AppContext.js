import React, {createContext, useState} from 'react';

// Create language context
export const AppContext = createContext();

// Create language context provider component
export const AppProvider = ({children}) => {
    const [language, setLanguage] = useState('bg');
    const [carouselImages, setCarouselImages] = useState(null);
    const [images, setImages] = useState(null);
    const [videos, setVideos] = useState(null);
    const [contact, setContact] = useState(null);
    const [youtubeLink, setYoutubeLink] = useState(null);
    const [plays, setPlays]=useState(null)

    const changeLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'en' ? 'bg' : 'en'));
    };

    return (
        <AppContext.Provider value={{
            language,
            changeLanguage,
            carouselImages,
            setCarouselImages,
            images,
            setImages,
            videos,
            setVideos,
            contact,
            setContact,
            youtubeLink,
            setYoutubeLink,
            plays,
            setPlays

        }}>
            {children}
        </AppContext.Provider>
    );
};