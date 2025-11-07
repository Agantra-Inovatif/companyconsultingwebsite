import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import WhyChooseUs from '../components/WhyChooseUs';
import OurProcess from '../components/OurProcess';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Content />
      <WhyChooseUs />
      <OurProcess />
      <CallToAction />
    </div>
  );
};

export default Home;
