//
//

import React from 'react';

import '../styles/Card.css';

export default function Card({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
}) {
  return (
    <div className='card'>
      <img src={img} className='card--image' alt='' />
      <div className='card--stats'>
        <img src='../images/star.png' className='card--star' alt='' />
        <span>{rating}</span>
        <span className='gray'>({parseInt(reviewCount)})</span>
        <span className='gray'>{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className='bold'>From ${parseInt(price)}</span> / person
      </p>
    </div>
  );
}
