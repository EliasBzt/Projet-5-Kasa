import React from 'react';
import Card from './Card';
import '../styles/Gallery.scss';

const Gallery = ({ cards }) => {
  return (
    <div className="gallery">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default Gallery;
