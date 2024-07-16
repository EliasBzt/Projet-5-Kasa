import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Collapse from '../Collapse';
import logements from '../../data/logements.json';
import '../../styles/Logements.scss';
import Carousel from '../Carousel'; 

const Logements = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find(logement => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate('/error');
    }
  }, [logement, navigate]);

  if (!logement) {
    return null; 
  }

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
      <Carousel pictures={logement.pictures} title={logement.title} />
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
