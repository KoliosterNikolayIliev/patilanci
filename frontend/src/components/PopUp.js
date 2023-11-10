import React from 'react';

const Popup = ({onClose, contactData, header, error, message}) => {
    const contactInfo = contactData;
    // console.log(message)
    // console.log(error)

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>X</button>
                {!error && <div className="contact-info">
                    <h2>{header}</h2>
                    <ul>
                        {Object.entries(contactInfo).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                            </li>
                        ))}
                    </ul>

                </div>}
                {error && <h2>{message}</h2>}
            </div>
        </div>
    );
};

export default Popup;
