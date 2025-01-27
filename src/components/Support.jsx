import React, { useState } from 'react';
import CustomButton from './CustomButton';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const categories = [
    'All Categories',
    'Technical Issues',
    'Account Help',
    'Billing',
    'General Inquiries'
  ];

  return (
    <div className="flex  items-start justify-center " style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div className=" rounded-4xl bg-white shadow-lg w-full max-w-4xl lg:max-w-6xl flex flex-col justify-center" style={{ height: '66.67vh', padding: '2rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <h1 className="text-3xl font-bold mb-8" style={{ textAlign: 'center' }}>
            Do you have a question or need support?
          </h1>
          <div style={{ textAlign: 'center', width: 'fit-content', margin: '4vh auto' }}>
            <CustomButton 
              buttonName="Contact Us"
              className=" px-8 w-fl"
            />
          </div>
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-xl font-semibold">
            View local tradespeople in your area
          </h3>
          
          <div>
            <select 
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="" disabled>Select a category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="pt-2" style={{ textAlign: 'center', width: 'fit-content', margin: '4vh auto' }}>
            <CustomButton 
              buttonName="Search Traders"
              className=" px-8"
            />
          </div>
        </div>

        <div className="" style={{
          marginTop : "4vh", 
          textAlign: 'center'
           }}>
          <img 
            src="/src/assets/logo.png" 
            alt="Support" 
            className="w-64 lg:w-80 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
