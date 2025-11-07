import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Lightbulb, Shield, Star, Handshake, Rocket, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Banner Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 animate-fade-in-down">
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">About Agantra Consulting</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl drop-shadow-md">Learn more about our journey, values, and what drives us to deliver exceptional web solutions.</p>
        </div>
      </div>

      <div className="bg-lightest py-16">
        <div className="container mx-auto p-4">

          {/* Our Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in-down">
            <div>
              <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Story" className="rounded-lg shadow-2xl w-full h-full object-cover"/>
            </div>
            <div className="text-lg">
              <h2 className="text-4xl font-bold mb-6 text-secondary">Our Story</h2>
              <p className="text-gray-700 mb-4 text-justify leading-relaxed">Agantra Consulting, a division of Agantra Inovatif OÜ, was founded with a simple mission: to help businesses succeed online. We are a team of passionate developers, designers, and strategists dedicated to creating innovative and effective web solutions.</p>
              <p className="text-gray-700 text-justify leading-relaxed">We believe in the power of technology to transform businesses, and we are committed to providing our clients with the tools and expertise they need to thrive in the digital world.</p>
            </div>
          </div>

          {/* Mission and Vision Section */}
          <div className="mt-20 animate-fade-in-down">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-2xl">
                <Rocket className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-6 text-secondary text-center">Our Mission</h2>
                <p className="text-gray-700 text-justify leading-relaxed">Our mission is to deliver high-quality, customized web solutions that empower our clients to achieve their business goals. We are dedicated to providing exceptional service, fostering innovation, and building long-lasting partnerships based on trust and mutual success.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-2xl">
                <Eye className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-6 text-secondary text-center">Our Vision</h2>
                <p className="text-gray-700 text-justify leading-relaxed">Our vision is to be a leading web development agency known for our creativity, technical excellence, and commitment to client success. We aspire to be at the forefront of digital innovation, continuously adapting to the evolving technological landscape to deliver cutting-edge solutions.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us? Section */}
          <div className="mt-20 animate-fade-in-down">
            <h2 className="text-5xl font-extrabold mb-12 text-center text-primary">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
                <Users className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Expert Team</h3>
                <p className="text-gray-700 leading-relaxed">Our team comprises seasoned professionals with extensive experience in web development, design, and digital strategy.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
                <Target className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Client-Centric Approach</h3>
                <p className="text-gray-700 leading-relaxed">We prioritize your needs and goals, working closely with you to deliver solutions that truly reflect your vision.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
                <Lightbulb className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Innovative Solutions</h3>
                <p className="text-gray-700 leading-relaxed">We leverage the latest technologies and creative strategies to build future-proof and impactful web solutions.</p>
              </div>
            </div>
          </div>

          {/* Our Core Values Section */}
          <div className="mt-20 animate-fade-in-down">
            <h2 className="text-5xl font-extrabold mb-12 text-center text-primary">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
                <Shield className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Integrity</h3>
                <p className="text-gray-700 leading-relaxed">We operate with honesty and transparency, building trust with our clients and partners.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
                <Star className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Excellence</h3>
                <p className="text-gray-700 leading-relaxed">We are committed to delivering exceptional quality in every project, striving for perfection in our craft.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
                <Handshake className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary mb-3">Collaboration</h3>
                <p className="text-gray-700 leading-relaxed">We believe in the power of teamwork, working closely with clients to achieve shared success.</p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 text-center bg-primary text-white p-12 rounded-lg shadow-2xl animate-fade-in-down">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8">Let's build something amazing together. Contact us today for a free consultation!</p>
            <Link to="/contact" className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-colors duration-300 shadow-lg text-lg">
              Get in Touch
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
