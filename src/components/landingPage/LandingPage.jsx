import React, { useState } from 'react';
import Modal from './Modal';
import './LandingPage.css';

const LandingPage = ({ imageUrl ,modalTitle,modalContent}) => {
  const [showModal, setShowModal] = useState(false);

  const handleMouseOver = () => {
    setShowModal(true);
    
  };

  const handleMouseOut = () => {
    setShowModal(false);
    
  };

  return (
    <div className="card-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <img src={imageUrl} alt="Card" className="card-image" />
      {showModal && <Modal title={modalTitle} content={modalContent} />}
    </div>
  );
};



export default LandingPage;


