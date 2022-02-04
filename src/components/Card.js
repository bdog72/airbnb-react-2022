//
//

import cardStar from '../images/star.png';

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
    <div className='card-container'>
      <img src={img} alt='person' className='card-image' />
      <div className='card-stats'>
        <img src={cardStar} alt='star-rating' className='card-star' />
        <span>{rating}</span>
        <span className='gray1'>({reviewCount}) • </span>
        <span className='gray1'>{country}</span>
      </div>
      <p>{title}</p>
      <p>
        <span className='bold'>From ${price}</span> / person
      </p>
    </div>
  );
}
