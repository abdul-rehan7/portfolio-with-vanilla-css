"use client"
import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm Abdul Rehan",' A Website Developer',' A UI/UX Designer'],
      typeSpeed: 50,
    });

    // Cleanup function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="hero">
        <div className="left">
          Hi! <br />
          <span ref={el} />
          <p>Creating digital products and experiences for all kinds of desires</p>
        </div>
        <div className="right">
          <img src="/Designer-bro.png" alt="" />
        </div>
      </div>
    </div>
  );
}
