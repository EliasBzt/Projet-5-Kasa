import React from 'react';
import logements from '../../data/logements.json';
import Banner from '../Banner';
import Card from '../Card';
import bannerImage from '../../assets/banner.jpg'; 
import '../../styles/Gallery.scss';
import '../../styles/Home.scss';
import '../../styles/Card.scss';


const Home = () => {
  return (
    <div className="home-container">
      <Banner
        title="Chez vous, partout et ailleurs"
        image={bannerImage}
      />
      <div className="gallery">
        {logements.map(logement => (
           <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
        ))}
      </div>
    </div>
  );
};

export default Home;
