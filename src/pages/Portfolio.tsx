import React from 'react';

const portfolioItems = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a custom CMS and payment gateway integration.',
    imageUrl: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '#',
  },
  {
    title: 'Corporate Website',
    description: 'A modern and responsive corporate website with a clean design and intuitive navigation.',
    imageUrl: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '#',
  },
  {
    title: 'Mobile App',
    description: 'A cross-platform mobile app for iOS and Android with a focus on user experience.',
    imageUrl: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '#',
  },
  {
    title: 'SaaS Application',
    description: 'A scalable SaaS application with a subscription-based model and a powerful admin dashboard.',
    imageUrl: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '#',
  },
  {
    title: 'Custom CMS',
    description: 'A custom content management system with a flexible architecture and a user-friendly interface.',
    imageUrl: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '#',
  },
  {
    title: 'Booking System',
    description: 'A comprehensive booking system for a travel agency with real-time availability and online payments.',
    imageUrl: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '#',
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="bg-lightest py-12">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-primary">Our Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src={item.imageUrl} alt={item.title} className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <a href={item.link} className="text-secondary hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
