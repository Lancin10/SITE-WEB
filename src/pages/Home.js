import React from 'react';
import Navigation from '../components/Navigation';


function Home() {
    return (
      <div className="home">
        <Navigation/>
        <div className="homeContent">
          <div className="content">
            <h1>Lancine Sérifou</h1>
            <h2>Data Engineer - Data Analyst</h2>
        
            <p>Bonjour et bienvenue !</p>
            <div className="pdf">
              <a href="./media/CV_LANCINE_SERIFOU.PDF" download="CV_LANCINE_SERIFOU.PDF">Télécharger CV</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Home;


