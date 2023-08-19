import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../ComponentsStyles/AppartCard.css"

function AppartCard({ appart }){
  return (
    <div className="Appart">

      <img src={appart.image} alt={appart.title} className='AppartImg' />

      <div className="AppartBottom">

        <div className='AppartBottomLeft'>
          <p className='AppartLocation'>{appart.location}</p>
          <p className='AppartType'>{appart.type}</p>
          <p className='AppartAvailableTime'>{appart.availableTime}</p>
          <p className='AppartPrice'>{appart.price} par nuit</p>
        </div>
        
        <div className="AppartBottomRight">
          <FontAwesomeIcon icon={['fas', 'star']} />
        </div>
      
      </div>
    
    </div>
  );
}

export default AppartCard;
