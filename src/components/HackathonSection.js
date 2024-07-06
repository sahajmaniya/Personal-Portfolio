import * as React from 'react';
import HackathonCardList from "./HackathonCard";  


export default function HackathonSection() {
  return (
        <div className='hack-container'>  
        <h2  className='hack-text'>Hackathons</h2>
          <div className="marquee">
      <div className="marquee-content">
        <HackathonCardList />
      </div>
    </div>
    </div>

  );
}
