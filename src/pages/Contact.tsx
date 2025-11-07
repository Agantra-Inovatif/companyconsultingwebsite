import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-lightest py-12">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-lg"></textarea>
              </div>
              <button type="submit" className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg">Send Message</button>
            </form>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Contact Information</h2>
            <p className="text-gray-700 mb-4"><strong>Email:</strong> info@agantraconsulting.com</p>
            <p className="text-gray-700 mb-4"><strong>Phone:</strong> +1 234 567 890</p>
            <p className="text-gray-700"><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
