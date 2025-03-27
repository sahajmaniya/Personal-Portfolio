import * as React from 'react';
import HackathonCardSlider from "./HackathonCard";  

export default function HackathonSection() {
  return (
    <div className='hack-container'>  
      <h2 className='hack-text'>Hackathons</h2>
      <HackathonCardSlider />
    </div>
  );
}