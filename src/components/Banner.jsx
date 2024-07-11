import React from 'react';
import '../styles/Banner.scss';

const Banner = ({ title, subtitle, image }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-content">
        <h1 className='titre'>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;