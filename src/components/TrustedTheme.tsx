import React from 'react';

const TrustedTheme: React.FC = () => {
  return (
    <div className="bg-light-blue py-12">
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary">Our Trusted Themes & Partners</h2>
        <p className="text-lg mb-8 text-gray-800">We partner with industry leaders and utilize robust technologies to deliver secure and reliable solutions.</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Placeholder for partner logos/icons */}
          <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
            <span className="text-secondary font-bold text-xl">Partner 1</span>
          </div>
          <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
            <span className="text-secondary font-bold text-xl">Partner 2</span>
          </div>
          <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
            <span className="text-secondary font-bold text-xl">Partner 3</span>
          </div>
          <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
            <span className="text-secondary font-bold text-xl">Partner 4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedTheme;
