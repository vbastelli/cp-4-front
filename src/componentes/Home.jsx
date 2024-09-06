import React from 'react';
import Card from '../componentes/Card';
import './home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="card-container">
        <Card 
          title="Camisa Argentina" 
          price="149.90" 
          image = './imagens/camisaargentina.png'
          
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
          title="Chuteira Nike Zoom Superfly 9 Elite KM Campo" 
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
          price="249.90" 
          image='./imagens/chuteira3.png'
          
        />
        <Card 
          title="CHUTEIRA DE CAMPO FUTURE 7 ULTIMATE" 
          price="279.90" 
          image='./imagens/chuteira4.png'
             />
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
          title="Luva Brasil" 
          price="159.90" 
          image='./imagens/luva2.png'
             />
        <Card 
          title="Luva Vermelha Adidas" 
          price="59.90" 
          image='./imagens/luvacoisa.png'
             />
      </div>
    </div>
  );
};

export default Home;
