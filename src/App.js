import './App.css';
import HeroBanner from './hero_banner/HeroBanner';
import React from 'react';
import header from './img/header.png';

function App() {
  let banner={
    name:"Kids Learning Center",
    title : "New Approach to Kids Education",
    description : " A kids learning center provides a nurturing environment where children can explore, learn, and grow. Through engaging activities and personalized attention, these centers foster curiosity, creativity, and a love for learning in young minds.",
    
  }

  return (
    <>
      <HeroBanner banner_name={banner.name} banner_title={banner.title} banner_description={banner.description} image={header}/>
    </>
  );
}

export default App;
