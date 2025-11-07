import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, ShoppingCart, Plug, Layout, Code, Search, Atom, Server, FileText, Palette, Database } from 'lucide-react';

const services = [
  {
    title: 'WordPress & CMS Development',
    description: 'We specialize in crafting bespoke WordPress themes and plugins, as well as developing on other leading Content Management Systems. Our solutions are tailored to your specific business needs, ensuring ease of content management, scalability, and robust performance. From custom post types to complex integrations, we deliver CMS solutions that empower you.',
    icon: Settings,
    bgColor: 'bg-primary',
    iconColor: 'text-white',
  },
  {
    title: 'E-Commerce Development',
    description: 'Launch or scale your online store with our expert e-commerce development services. We build secure, high-performing, and user-friendly online shops using platforms like WooCommerce, Shopify, and custom solutions. Our focus is on creating seamless shopping experiences that convert visitors into loyal customers, complete with payment gateway integration, inventory management, and analytics.',
    icon: ShoppingCart,
    bgColor: 'bg-secondary',
    iconColor: 'text-white',
  },
  {
    title: 'Solution Integration',
    description: 'Streamline your business operations by integrating various third-party services and APIs into your web applications. Whether it\'s CRM systems, ERP solutions, marketing automation tools, or custom APIs, we ensure smooth and efficient data flow between your platforms. Our integration services enhance functionality, reduce manual effort, and provide a unified digital ecosystem.',
    icon: Plug,
    bgColor: 'bg-tertiary',
    iconColor: 'text-white',
  },
  {
    title: 'Web Design & UI/UX',
    description: 'Our web design and UI/UX services focus on creating visually appealing and highly intuitive digital experiences. We combine aesthetic design with user-centered principles to build websites that are not only beautiful but also easy to navigate and engaging. From wireframing and prototyping to final design implementation, we ensure your website stands out and provides an exceptional user journey.',
    icon: Layout,
    bgColor: 'bg-primary',
    iconColor: 'text-white',
  },
  {
    title: 'Web Application Development',
    description: 'We build custom web applications from the ground up, tailored to your unique business processes and requirements. Utilizing modern frameworks and technologies, we deliver scalable, secure, and high-performance applications that drive efficiency and innovation. From complex enterprise solutions to interactive consumer-facing platforms, we bring your ideas to life.',
    icon: Code,
    bgColor: 'bg-secondary',
    iconColor: 'text-white',
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve your online visibility and drive organic traffic with our comprehensive SEO services. We implement proven strategies, including keyword research, on-page optimization, technical SEO, and link building, to ensure your website ranks higher in search engine results. Our goal is to help you reach your target audience and achieve sustainable growth.',
    icon: Search,
    bgColor: 'bg-tertiary',
    iconColor: 'text-white',
  },
];

const technologies = [
  {
    name: 'React/VUE',
    icon: Atom,
  },
  {
    name: 'Node.js/.NET Core/PHP',
    icon: Server,
  },
  {
    name: 'WordPress',
    icon: FileText,
  },
  {
    name: 'Framework',
    icon: Palette,
  },
  {
    name: 'MongoDB',
    icon: Database,
  },
];

const Services: React.FC = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url("https://via.placeholder.com/1500x600/007bff/ffffff?text=Our+Services+Banner")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-2xl text-center max-w-2xl">Discover how our expertise can transform your digital presence and streamline your operations.</p>
        </div>
      </div>

      <div className="py-12 bg-lightest">
        <div className="container mx-auto p-4">
          <h2 className="text-4xl font-bold mb-6 text-center text-primary">Comprehensive Web Development Solutions</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            At Agantra Consulting, we offer a range of specialized web development services designed to elevate your digital presence and streamline your operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`${service.bgColor} text-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105`}>
                  <div className="flex justify-center mb-4">
                    <IconComponent className={`w-12 h-12 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
                  <p className="text-justify">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* Technology Section */}
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary">Technologies We Master</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {technologies.map((tech, index) => {
                const TechIconComponent = tech.icon;
                return (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center w-36 h-36">
                    <TechIconComponent className="w-16 h-16 text-primary mb-2" />
                    <p className="text-lg font-semibold text-gray-800">{tech.name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">Ready to start your project?</h2>
            <p className="text-lg text-gray-700 mb-8">Let's discuss how our expertise can bring your vision to life.</p>
            <Link to="/contact" className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
