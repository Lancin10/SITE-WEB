import React from 'react';
import Navigation from '../components/Navigation';


function Home() {
    return (
      <div className="home">
        <Navigation/>
        <div className="homeContent">
          <div className="content">
            <h1>Lancine Serifou</h1>
            <h2>Data Engineer - Développeur BI</h2>
        
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
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Q776FCVE6C"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Q776FCVE6C');
</script>
