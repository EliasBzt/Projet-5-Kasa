import React, { useState } from 'react';
import '../styles/Collapse.scss';

const Collapse = ({ title, children, customClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''} ${customClass}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <span className={`collapse-icon ${isOpen ? 'rotate' : ''}`}></span>
      </div>
      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;
