import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../Collapse';
import logements from '../../data/logements.json';
import '../../styles/Logements.scss';

const Logements = () => {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!logement) {
    return <p>Logement non trouvé</p>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);
  };

  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="logement-container">
      <div className="logement-image-container">
        <img src={logement.pictures[currentImageIndex]} alt={logement.title} className="logement-cover" />
        {logement.pictures.length > 1 && (
          <>
            <button className="prev-button" onClick={handlePrevImage}>
              <span className="image-icone"></span>
            </button>
            <button className="next-button" onClick={handleNextImage}>
              <span className="image-icone rotate"></span>
            </button>
            <div className="image-counter">
              {currentImageIndex + 1}/{logement.pictures.length}
            </div>
          </>
        )}
      </div>
      <div className="logement-header">
        <div className="logement-title">
          <h1 className="h1">{logement.title}</h1>
          <p className="p">{logement.location}</p>
        </div>
        <div className="logement-host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
        </div>
      </div>
      <div className="logement-details">
        <div className="logement-tags">
          {logement.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="logement-rating">
          {renderRating(parseInt(logement.rating))}
        </div>
      </div>
      <div className="host-rating-mobile">
        <div className="logement-rating-mobile">
          {renderRating(parseInt(logement.rating))}
        </div>
        <div className="logement-host-mobile">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
        </div>
      </div>
      <div className="logement-collapses">
        <div className='logement-collapse'>
          <Collapse title="Description" customClass="logement-collapse">
            <p>{logement.description}</p>
          </Collapse>
        </div>
        <div className='logement-collapse'>
          <Collapse title="Équipements" customClass="logement-collapse">
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Logements;
