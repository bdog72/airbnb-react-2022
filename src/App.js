//
//

import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import datajsData from './data';

const personalElements = datajsData.map((data) => {
  return (
    <Card
      key={data.id}
      img={data.coverImg}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      location={data.location}
      title={data.title}
      price={data.price}
    />
  );
});
console.log(personalElements);

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='card-container'>{personalElements}</div>
    </div>
  );
}
