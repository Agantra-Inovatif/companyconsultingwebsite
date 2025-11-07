import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      >
        <source src="https://videos.pexels.com/video-files/3254012/3254012-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center p-8">
        <h1 className="text-6xl font-extrabold mb-4 text-shadow-lg">Unlock Your Business Potential</h1>
        <p className="text-2xl mb-8 text-shadow-md">Strategic consulting for transformative growth and success.</p>
        <Link to="/contact" className="bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105">
          Schedule a Consultation
        </Link>
      </div>
    </div>
  );
};

export default Hero;
