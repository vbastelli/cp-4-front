import React from 'react';
import '../componentes/card.css';

const Card = ({ title, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p className="price">R$ {price}</p>
        <button className="btn">Comprar</button>
      </div>
    </div>
  );
};

export default Card;
