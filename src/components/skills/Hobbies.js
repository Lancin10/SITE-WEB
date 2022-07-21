import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Centres d'intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-film"></i>
                    <span>Cinéma</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-bicycle"></i>
                    <span>Vélo</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-satellite-dish"></i>
                    <span>Espace</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-atom"></i>
                    <span>Histoire des Sciences</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;