import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-lightest py-12">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Us" className="rounded-lg shadow-lg"/>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-secondary">Our Story</h2>
            <p className="text-gray-700 mb-4">Agantra Consulting was founded with a simple mission: to help businesses succeed online. We are a team of passionate developers, designers, and strategists who are dedicated to creating innovative and effective web solutions.</p>
            <p className="text-gray-700">We believe in the power of technology to transform businesses, and we are committed to providing our clients with the tools and expertise they need to thrive in the digital world.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
