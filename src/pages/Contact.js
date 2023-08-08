import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';


function Contact() {
    return (
      <div className="contact">
        <Navigation />
        <div className="contactContent">
          <div className="header"></div>

          <div className="contactBox">
            <h1>Contactez moi</h1>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Paris, France</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <CopyToClipboard text="0647976742">
                  <span 
                    className="clickInput" 
                    onClick={()=>
                      { alert('Téléphone copié')}}
                  >
                  06 47 97 67 42
                  </span>
                </CopyToClipboard>
                
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <CopyToClipboard text="lancine.serifou10@gmail.com">
                  <span 
                    className="clickInput" 
                    onClick={()=>
                      { alert('Email copié')}}
                  >
                  lancine.serifou10@gmail.com
                  </span>
                </CopyToClipboard>
                
              </li>
            </ul>
          </div>

          <div className="socialNetwork">
          <ul>
                <a href="https://www.linkedin.com/in/lancine-serifou/" target="_blank" rel="noopenner noreferrer">
                  <h4>LinkedIn</h4>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/lancin10" target="_blank" rel="noopenner noreferrer">
                  <h4>Github</h4>
                  <i className="fab fa-github"></i>
                </a>
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default Contact;
