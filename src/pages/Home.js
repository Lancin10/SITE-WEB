import React from 'react';
import Navigation from '../components/Navigation';


function Home() {
    return (
      <div className="home">
        <Navigation/>
        <div className="homeContent">
          <div className="content">
            <h1>Lancine Serifou</h1>
            <h2>Data Engineer | Data Scientist</h2>
            <h2>Python - R - SQL - PySpark </h2>
            <p>Bonjour et bienvenue !</p>
            <div className="pdf">
              <a href="./media/CV_Lancine_Serifou.PDF" download="CV_Lancine_Serifou.PDF">Télécharger CV</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Home;