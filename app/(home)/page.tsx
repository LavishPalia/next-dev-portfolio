import React from 'react';
import Navbar from './components/Navbar';

const page = () => {
  return (
    <div className='min-h-screen bg-black'>
      <div className='max-w-5xl mx-auto'>
        <Navbar />
      </div>  
    </div>
  );
};

export default page;
