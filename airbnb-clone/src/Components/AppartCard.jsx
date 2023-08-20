import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../ComponentsStyles/AppartCard.css"

function AppartCard({ appart }){
  return (
    <div className="Appart">

      <div className="AppartTop">

        <img src={appart.image} alt={appart.title} className='AppartImg' />

      </div>

      <div className="AppartBottom">

        <div className='AppartBottomLeft'>
          <p className='AppartLocation'>{appart.location}</p>
          <p className='AppartType'>{appart.type}</p>
          <p className='AppartAvailableTime'>{appart.availableTime}</p>
          <p className='AppartPrice'>{appart.price} par nuit</p>
        </div>
        
        <div className="AppartBottomRight">
          <p className='StarRating'><FontAwesomeIcon icon={['fas', 'star']} /> {appart.rating}</p>
        </div>
  
      </div>
    
    </div>
  );
}

export default AppartCard;
