import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <img src="./media/broken.png" alt="Not found"/>
                <h3>Désolé, il n'y a pas de page à cet url.</h3>
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span> Accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;