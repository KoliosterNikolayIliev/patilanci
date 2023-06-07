import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AppContext} from "../context/AppContext";
import axios from "axios";
import PopUp from './PopUp';


function Footer() {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const {language} = React.useContext(AppContext);
    const [contactData, setContactData] = useState(null)
    const [err, setErr] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const baseUrl = 'http://127.0.0.1:8000'
    const endpoint = '/api/contact'

    function handleContactsClick() {
        axios.get(baseUrl + endpoint)
            .then(response => {
                    const data = removeKeysWithBgAndId(response.data[0], language)
                    setContactData(data)
                    openPopup()
                }
            )
            .catch(error => {
                setErr(true)
                setErrorMessage(language==='en'?'Something went wrong!':'Нещо се обърка!')
                openPopup()
            })
    }

    const openPopup = () => {
        setPopupOpen(true);
    };
    const closePopup = () => {
        setPopupOpen(false);
    };

    function removeKeysWithBgAndId(obj, language) {
        const result = {...obj};
        delete result.id;

        if (language === 'en') {
            for (const key in result) {
                if (key.includes('_bg')) {
                    delete result[key];
                }
            }
        } else {
            for (const key in result) {
                if (!key.includes('_bg') && key !== 'phone') {
                    delete result[key];
                } else if (key === 'phone') {
                    result['телефон'] = result[key];
                    delete result[key];
                } else if (key === 'address_bg') {
                    result['адрес'] = result[key];
                    delete result[key];
                } else if (key === 'info_bg') {
                    result['информация'] = result[key];
                    delete result[key];
                } else if (key === 'about_bg') {
                    result['за нас'] = result[key];
                    delete result[key];
                }
            }
        }

        return result;
    }


    return (
        <footer className="footer bg-light text-center py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/" target="_blank"
                                   rel="noopener noreferrer">{language === 'en' ? 'Facebook' : 'Фейсбук'}</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/" target="_blank"
                                   rel="noopener noreferrer">{language === 'en' ? 'Instagram' : 'Инстаграм'}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <Link onClick={handleContactsClick}>
                                    {language === 'en' ? 'Contact Us' : 'Контакти'}
                                </Link>
                                {isPopupOpen &&
                                    <PopUp onClose={closePopup} contactData={contactData}
                                           header={language === 'en' ? "Contact Information" : "Контакти"}
                                           error={err}
                                           message={errorMessage}
                                    />}

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;