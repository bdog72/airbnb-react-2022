// //
// //

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import cardImage from './images/katie-zaferes.png';

function App() {
  return (
    <div>
      <Navbar />
      <Hero header='Online Experiences' />
      <Card
        img={cardImage}
        rating={5}
        reviewCount={6}
        country='USA'
        title='Life lessons with Katie Zaferes'
        price={136}
      />
    </div>
  );
}

export default App;
