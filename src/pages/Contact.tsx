import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div>
      {/* Hero Banner Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 animate-fade-in-down">
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl drop-shadow-md">We'd love to hear from you! Whether you have a question about our services or want to start a project, we're here to help.</p>
        </div>
      </div>

      <div className="bg-lightest py-16">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form Section */}
            <div className="bg-white p-8 rounded-lg shadow-2xl animate-fade-in-down">
              <h2 className="text-4xl font-bold mb-6 text-secondary text-center">Send Us a Message</h2>
              <div className="relative h-0" style={{ paddingBottom: '120%' }}>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeKYLyuqmPUA-Lul_mYmwuv1ikQv2rvDlxF9BuwJNdjERRl5Q/viewform?embedded=true"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                >
                  Loading…
                </iframe>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="bg-white p-8 rounded-lg shadow-2xl animate-fade-in-down">
              <h2 className="text-4xl font-bold mb-6 text-secondary text-center">Contact Information</h2>
              <div className="space-y-6 text-lg">
                <div className="flex items-center">
                  <Mail className="w-8 h-8 text-primary mr-4" />
                  <div>
                    <h3 className="font-bold text-xl">Email</h3>
                    <a href="mailto:info@agantra.dev" className="text-gray-700 hover:text-secondary transition-colors">info@agantra.dev</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-8 h-8 text-primary mr-4" />
                  <div>
                    <h3 className="font-bold text-xl">Phone / WhatsApp</h3>
                    <a href="https://wa.me/37253194019" className="text-gray-700 hover:text-secondary transition-colors">+372 5319 4019</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-8 h-8 text-primary mr-4" />
                  <div>
                    <h3 className="font-bold text-xl">Address</h3>
                    <p className="text-gray-700">Estonia</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
