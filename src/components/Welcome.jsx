import React, { useRef, useEffect, useState } from 'react';
import '../styles/welcome.css';

// SwiperJS를 이용해서 만들면 어떤지?
export default function Welcome() {
  return (
    <div>
      <div className="welcome-div">
        <span className="welcome-span">Hello. I made this Chatbot.</span>
        <p className="welcome-p">Used ChatGPT Api. Ask any questions !</p>
      </div>
    </div>
  );
};