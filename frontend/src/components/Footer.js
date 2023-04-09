import React from "react";
import {AppContext} from "../context/AppContext";

function Footer() {
  const {language} = React.useContext(AppContext);
  return (

    <footer className="footer bg-light text-center py-3" >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="mailto:example@example.com">
                  {language === 'en' ? 'Contact Us' : 'Контакти'}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;