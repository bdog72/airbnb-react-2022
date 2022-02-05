//
//

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import { dataItems } from './data';
console.log(dataItems);

// dataItems.map((data) => {
//   console.log(data.title);
//   return data;
// });

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />;
      {dataItems.map((data) => {
        console.log(data);

        return (
          <Card
            key={data.id}
            img={data.coverImg}
            rating={data.stats.rating}
            reviewCount={data.stats.reviewCount}
            location={data.location}
            title={data.description}
            price={data.price}
          />
        );
      })}
    </div>
  );
}
