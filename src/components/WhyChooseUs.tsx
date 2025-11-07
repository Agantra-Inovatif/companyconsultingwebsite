import React from 'react';
import { Users, Handshake, Award } from 'lucide-react';

const reasons = [
  {
    title: 'Experienced Team',
    description: 'Our team consists of experienced developers, designers, and project managers dedicated to your success.',
    icon: <Users className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Client-Centric Approach',
    description: 'We work closely with you to understand your needs and deliver a solution that exceeds your expectations.',
    icon: <Handshake className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Quality & Reliability',
    description: 'We are committed to delivering high-quality, reliable, and scalable solutions on time and within budget.',
    icon: <Award className="w-12 h-12 text-primary" />,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="py-12 bg-lightest">
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
