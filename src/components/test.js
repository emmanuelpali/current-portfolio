import React, {useState} from 'react';
import portfolioContent from '../DATA/data';

function Ap() {
  
    return (
      <div>
        {portfolioContent.map(person => (
            
          <p>{person.name}</p>
        ))}
      </div>
    );
  }

  export default Ap;