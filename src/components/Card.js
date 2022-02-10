//
//

import React from 'react';

import '../styles/Card.css';

export default function Card(props) {
  let badgeText;

  if (props.data.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.data.location === 'Online') {
    badgeText = `Online`;
  } else {
    badgeText = ``;
  }

  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={props.data.coverImg} className='card--image' alt='' />
      <div className='card--stats'>
        <img src='../images/star.png' className='card--star' alt='' />
        <span>{props.data.stats.rating}</span>
        <span className='gray'>({parseInt(props.data.stats.reviewCount)})</span>
        <span className='gray'>{props.data.location}</span>
      </div>
      <p>{props.data.title}</p>
      <p>
        <span className='bold'>From ${parseInt(props.data.price)}</span> /
        person
      </p>
    </div>
  );
}
