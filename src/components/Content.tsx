import React from 'react';
import { Cog, ShoppingCart, Plug } from 'lucide-react';

const services = [
  {
    title: 'WordPress & CMS',
    description: 'Custom themes, plugins, and CMS development.',
    icon: <Cog className="w-12 h-12 text-primary" />,
  },
  {
    title: 'E-Commerce',
    description: 'Powerful and scalable e-commerce solutions.',
    icon: <ShoppingCart className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Solution Integration',
    description: 'Third-party service and API integration.',
    icon: <Plug className="w-12 h-12 text-primary" />,
  },
];

const Content: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
