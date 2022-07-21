import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
      <div className="sidebar">

        <div className="id">
            <div className="idContent">
                <img src="./media/profil.jpg" alt ="profil-pic" />
                <h3>Lancine SERIFOU</h3>
            </div>
        </div>

        <div className="navigation">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="navActive">
                        <i className="fas fa-home"></i>
                        <span>Accueil</span>
                    </NavLink>
                </li>
                <li>
                <NavLink exact to="/skills" activeClassName="navActive">
                <i className="fas fa-mountain"></i>
                    <span>Compétences</span>
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/portfolio" activeClassName="navActive">
                    <i className="fas fa-images"></i>
                    <span>Portfolio</span>
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/contact" activeClassName="navActive">
                    <i className="fas fa-address-book"></i>
                    <span>Contact</span>
                </NavLink>
                </li>
            </ul>
        </div>

        <div className="socialNetwork">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/lancine-serifou/" target="_blank" rel="noopenner noreferrer"><i className="fab fa-linkedin"></i></a>
                </li>
                <li>
                    <a href="https://github.com/lancin10" target="_blank" rel="noopenner noreferrer"><i className="fab fa-github"></i></a>
                </li>
            </ul>
        </div>   

        <div className='signature'>
            
        </div>

      </div>
    );
  }

export default Navigation;