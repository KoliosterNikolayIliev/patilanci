import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../context/AppContext";
import axios from "axios";

function Footer() {
  const {language} = React.useContext(AppContext);
  const {contact, setContact} = useContext(AppContext);
  const [err, setErr] = useState(false);

  const baseUrl = 'http://127.0.0.1:8000'
    const endpoint = '/api/contact'
    useEffect(() => {
        axios.get(baseUrl + endpoint)
            .then(response => {
            setContact(response.data)
                    console.log(response)
            }

            )
            .catch(error => {
                console.log(error)
                setErr(true)
            })
    }, [setContact, endpoint]);

    if (err) {
        // console.log(err)
        //TODO component needed
        return <div style={{height: '83vh'}}>KUR</div>;
    }

    if (contact === null) {
        return (
            //TODO component needed
            <div style={{height: '83vh'}}>
                <p>Loading...</p>
            </div>
        );
    }
    console.log(contact)
    // let itemsWithFullUrl = items
    // if (content === 'images') {
    //     itemsWithFullUrl = items.map(
    //         (image) => ({
    //             ...image,
    //             image_field_url: baseUrl + image.image_field_url
    //         }));
    // }

  return (

    <footer className="footer bg-light text-center py-3" >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">{language === 'en' ?'Facebook':'Фейсбук'}</a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">{language === 'en' ?'Instagram':'Инстаграм'}</a>
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