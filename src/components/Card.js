//
//

import React from 'react';

import '../styles/Card.css';

export default function Card({
  img,
  rating,
  reviewCount,
  country,
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
        <span className='gray'>{country}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className='bold'>From ${parseInt(price)}</span> / person
      </p>
    </div>
  );
}
