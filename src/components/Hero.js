//
//

import '../styles/Hero.css';
import gridPhoto from '../images/photo-grid.png';

export default function Hero({ header }) {
  return (
    <section className='hero'>
      <img src={gridPhoto} className='hero--photo' alt='grid-pic' />
      <h1 className='hero--header'>{header}</h1>
      <p className='hero--text'>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
