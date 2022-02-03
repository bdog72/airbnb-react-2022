//
//

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

import cardImage from '../images/katie-zaferes.png';
import cardStar from '../images/star.png';

import '../styles/Card.css';

export default function Card(props) {
  return (
    <div className='card-container'>
      <img src={cardImage} alt='person' className='card-image' />
      <div className='card-stats'>
        <img src={cardStar} alt='star-rating' className='card-star' />
        <span>5.0</span>
        <span className='gray1'>(6) • </span>
        <span className='gray1'>U.S.A</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className='bold'>From $136</span> / person
      </p>
    </div>
  );
}
