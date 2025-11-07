import React from 'react';
import { Search, Layout, Code, Rocket } from 'lucide-react';

const processSteps = [
  {
    title: 'Discovery',
    description: 'We start by understanding your goals, target audience, and project requirements.',
    icon: <Search className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Design',
    description: 'We create a user-friendly and visually appealing design for your website or application.',
    icon: <Layout className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Development',
    description: 'Our expert developers bring the design to life with clean and efficient code.',
    icon: <Code className="w-12 h-12 text-primary" />,
  },
  {
    title: 'Launch',
    description: 'We deploy your project to the server and ensure a smooth and successful launch.',
    icon: <Rocket className="w-12 h-12 text-primary" />,
  },
];

const OurProcess: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {processSteps.map((step, index) => (
            <div key={index} className="p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
