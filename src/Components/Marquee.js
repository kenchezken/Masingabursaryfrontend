import React from 'react';

const Marquee = () => {


    const marqueeStyle = {
        backgroundColor: '#154c79',
        fontWeight : '100px' ,
        color: 'Red',
        fontSize: '24px', // Adjust the font size as needed
        padding: '10px', // Optional: Add padding to enhance visibility
      };
    
  return (
    // Your JSX code here
    <div>
      <marquee behavior="scroll" direction="left" style={marqueeStyle} >
       Bursary Application For Financial Year 2024/2025 will open on 27th December 2024!!!
      </marquee>
    </div>
  );
};

export default  Marquee;
