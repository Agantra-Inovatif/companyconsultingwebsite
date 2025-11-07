import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-primary text-white py-12">
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
        <p className="mb-8">Let's work together to create an amazing digital experience for your users.</p>
        <Link to="/contact" className="bg-white hover:bg-light text-primary font-bold py-3 px-6 rounded-lg">
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
