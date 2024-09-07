import React, { useState } from 'react';
import Card from '../componentes/Card';
import './home.css';

const Home = () => {
  const [activeSection, setActiveSection] = useState('camisas');
  const [isMuted, setIsMuted] = useState(true);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const muteImage = isMuted ? './imagens/mute.png' : './imagens/desmute.png';

  return (
    <div>
      <div className="hero">
        <video className="hero-video" autoPlay muted={isMuted} loop>
          <source src="./imagens/video_home2.mp4" type="video/mp4" />
        </video>
        <button className="mute-button" onClick={toggleMute}>
          <img src={muteImage} alt={isMuted ? 'Desmutar' : 'Mutar'} />
        </button>
        <div className="hero-text">Madev Sports™</div>
      </div>
      <div className="home">
        <div className="home-container">
          <div className="section">
            <button 
              className={`section-title ${activeSection === 'camisas' ? 'active' : ''}`} 
              onClick={() => toggleSection('camisas')}
            >
              <span className="arrow">&#9664;</span> Camisas <span className="arrow">&#9654;</span>
            </button>
              <section id='produtos'>
            <div className={`section-content ${activeSection === 'camisas' ? 'show' : ''}`}>
              <div className="card-container">
                <Card 
                  title="Camisa Argentina" 
                  price="149.90" 
                  image='./imagens/camisaargentina.png'
                />
                <Card 
                  title="Camisa Brasil" 
                  price="189.90" 
                  image='./imagens/camisabrasil.png'
                />
                <Card 
                  title="Camisa França" 
                  price="159.90" 
                  image='./imagens/camisafranca.png'
                />
                <Card 
                  title="Camisa EUA" 
                  price="149.90" 
                  image='./imagens/camisaeua.png'
                />
                <Card 
                  title="Camisa Japão" 
                  price="139.90" 
                  image='./imagens/camisajapao.jpeg'
                />
                <Card 
                  title="Camisa Nigeria" 
                  price="189.90" 
                  image='./imagens/camisanigeria.jpg'
                />
              </div>

            </div>
            </section>
          </div>

          <div className="section">
            <button 
              className={`section-title ${activeSection === 'chuteiras' ? 'active' : ''}`} 
              onClick={() => toggleSection('chuteiras')}
            >
              <span className="arrow">&#9664;</span> Chuteiras <span className="arrow">&#9654;</span>
            </button>
            <div className={`section-content ${activeSection === 'chuteiras' ? 'show' : ''}`}>
              <div className="card-container">
                <Card 
                  title="Chuteira Nike Zoom Superfly 9 Elite KM" 
                  price="299.90" 
                  image='./imagens/chuteira1.png'
                />
                <Card 
                  title="Chuteira Nike Zoom Mercurial Superfly 9 Elite" 
                  price="359.90" 
                  image='./imagens/chuteira2.png'
                />
                <Card 
                  title="Chuteira Nike Zoom Superfly 9 Plus" 
                  price="219.90" 
                  image='./imagens/chuteira3.png'
                />
                <Card 
                  title="Chuteira Future 7 Ultimate" 
                  price="279.90" 
                  image='./imagens/chuteira4.png'
                />
                <Card 
                  title="Chuteira Neymar Jr Puma Future Play" 
                  price="249.90" 
                  image='./imagens/chuteira5.png'
                />
                <Card 
                  title="Chuteira Ultra 5 Carbon" 
                  price="199.90" 
                  image='./imagens/chuteira6.png'
                />
              </div>
            </div>
          </div>

          <div className="section">
            <button 
              className={`section-title ${activeSection === 'bolas-e-luvas' ? 'active' : ''}`} 
              onClick={() => toggleSection('bolas-e-luvas')}
            >
              <span className="arrow">&#9664;</span> Bolas e Luvas <span className="arrow">&#9654;</span>
            </button>
            <div className={`section-content ${activeSection === 'bolas-e-luvas' ? 'show' : ''}`}>
              <div className="card-container">
                <Card 
                  title="Bola Penalty" 
                  price="159.90" 
                  image='./imagens/bolapenalty.png'
                />
                <Card 
                  title="Bola Champions" 
                  price="149.90" 
                  image='./imagens/bolachampions.png'
                />
                <Card 
                  title="Bola Copa Feminina" 
                  price="189.90" 
                  image='./imagens/bolacopa.png'
                />
                <Card 
                  title="Luva Amarela Brasil" 
                  price="159.90" 
                  image='./imagens/luva2.png'
                />
                <Card 
                  title="Luva Vermelha Adidas" 
                  price="59.90" 
                  image='./imagens/luvacoisa.png'
                />
                <Card 
                  title="Luva Branca Nike" 
                  price="149.90" 
                  image='./imagens/luva3.avif'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
